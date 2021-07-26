import { useState } from "react";
import InputForm from "../../components/inputForm";
import SelecForm from "../../components/selecForm";

import api from "../../uteis/configApi";

export default function Cadastrar(props) {
  const [lancamento, setLancamento] = useState({
    nome: "",
    valor: "",
    tipo: "",
    situacao: "",
    dataPagamento: "",
  });

  const [valorLancTarget, setValorLancTarget] = useState("")

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const valorInput = (e) =>
    setLancamento({ ...lancamento, [e.target.name]: e.target.value });

  const valorLancamento = async e => {
    let valorLancamentoInput = e.target.value;
    
    valorLancamentoInput = valorLancamentoInput.replace(/\D/g, "")
    valorLancamentoInput = valorLancamentoInput.replace(/(\d)(\d{2})$/, "$1,$2")
    valorLancamentoInput = valorLancamentoInput.replace(/(?=(\d{3})+(\D))\B/g, ".")
    setValorLancTarget(valorLancamentoInput)
    
    let valorSalvar = await valorLancamentoInput.replace(".", "")
    valorSalvar = await valorSalvar.replace(",", ".")

    setLancamento({...lancamento, valor: valorSalvar})
  }

  const cadLancamento = async (e) => {
    e.preventDefault();
    console.log(lancamento.nome);

    const headers = {
      "Content-Type": "application/json",
    };
    await api
      .post("http://localhost:8080/cadastrar", lancamento, { headers })
      .then((response) => {
        setStatus({
          type: "Success",
          mensagem: response.data.mensagem,
        });
      })
      .catch((err) => {
        if (err.response) {
          setStatus({
            type: "error",
            mensagem: err.response.data.mensagem,
          });
        } else {
          setStatus({
            type: "error",
            mensagem: "Erro: tente mais tarde!",
          });
        }
      });

  };

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center bg-purple-200">
      <div className="bg-gray-50 rounded-md shadow-md p-4 md:w-1/5">
        <header className="mb-6 font-bold tracking-wide bg-purple-500 text-center text-white p-2 rounded-md">
          <h1>Cadastrar Lançamentos</h1>
        </header>
        <form onSubmit={cadLancamento}>
        {status.type === "error" ? <p>{status.message}</p> : ""}
        {status.type === "Success" ? <p>{status.message}</p> : ""}
          <InputForm
            label=""
            type="text"
            name="nome"
            placeholder="Nome do Lamçamento"
            onChange={valorInput}
          />
          <InputForm
            label=""
            type="text"
            name="valor"
            value={valorLancTarget}
            placeholder="Valor do Lamçamento"
            onChange={valorLancamento}
          />
          {/* <InputForm label="" type="text" name="tipo" placeholder="Tipo do Lamçamento" onChange={valorInput}/> */}
          <SelecForm
            name="tipo"
            tipolabel="Selecione o Tipo"
            tipoUm="Pagamento"
            tipoDois="Recebido"
            valorUm="1"
            valorDois="2"
            onChange={valorInput}
          />
          <SelecForm
            name="situacao"
            tipolabel="Situação do Lamçamento"
            tipoUm="Pago"
            tipoDois="Pendente"
            tipoTres="Recebido"
            valorUm="1"
            valorDois="2"
            valorDois="3"
            onChange={valorInput}
          />
          <InputForm
            label=""
            type="date"
            name="dataPagamento"
            onChange={valorInput}
          />
          <button
            type="submit"
            className="w-full mt-6 px-3 py-1 bg-purple-300 text-purple-900 rounded-md shadow-md hover:border-2 hover:bg-purple-600 hover:text-white hover:shadow-inner"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
