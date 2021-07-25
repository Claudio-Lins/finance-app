import Head from "next/head";
import React from "react";
import moment from "moment";
import { useState, useEffect } from "react";

import api from "../uteis/configApi";

export const Home = () => {
  const [data, setData] = useState([]);
  const [saldo, setSaldo] = useState("");
  const [valorPagamento, setValorPagamento] = useState("");
  const [valorRecebido, setValorRecebido] = useState("");

  let dataAtual = new Date();
  let ano = dataAtual.getFullYear();
  let mes = dataAtual.getMonth() + 1;

  const [dateView, setDateView] = useState({
    ano,
    mes,
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const anterior = async () => {
    if (dateView.mes === 1) {
      ano = dateView.ano - 1;
      mes = 12;
      setDateView({
        ano,
        mes,
      });
      listarExtrato(mes, ano);
    } else {
      ano = dateView.ano;
      mes = dateView.mes - 1;
      setDateView({
        ano,
        mes,
      });
      listarExtrato(mes, ano);
    }
  };
  const proximo = async () => {
    if (dateView.mes === 12) {
      ano = dateView.ano + 1;
      mes = 1;
      setDateView({
        ano,
        mes,
      });
      listarExtrato(mes, ano);
    } else {
      ano = dateView.ano;
      mes = dateView.mes + 1;
      setDateView({
        ano,
        mes,
      });
      listarExtrato(mes, ano);
    }
  };

  const listarExtrato = async (mes, ano) => {
    if (mes === undefined && ano === undefined) {
      let dataAtual = new Date();
      ano = dataAtual.getFullYear();
      mes = dataAtual.getMonth() + 1;
    }

    await api
      .get("http://localhost:8080/listar/" + mes + "/" + ano)
      .then((response) => {
        setData(response.data.lancamentos);
        setSaldo(response.data.saldo);
        setValorPagamento(response.data.valorPagamento);
        setValorRecebido(response.data.valorRecebido);
      })
      .catch((err) => {
        if (err.response) {
          setStatus({
            type: "erro",
            mensagem: err.response.data.mensagem,
          });
        } else {
          setStatus({
            type: "erro",
            mensagem: "Tente mais tarde!",
          });
        }
      });
  };

  useEffect(() => {
    listarExtrato();
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <Head>
        <title>Controle Financeiro - CELKE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-purple-600 px-36 mb-4 w-full h-[100px] flex justify-between items-center">
        <h1 className=" font-bold text-4xl text-white tracking-wide">
          Controle Financeiro
        </h1>
        <button className='px-3 py-1 bg-purple-300 text-purple-900 rounded-md shadow-md hover:border-2 hover:bg-purple-600 hover:text-white hover:shadow-inner'>Cadastrar</button>
      </header>
        {status.type === "erro" ? <span>{status.mensagem}</span> : ""}

      <main className="flex flex-col px-36 items-center justify-center w-full flex-1 text-center">
        <div className="flex space-x-1 text-lg font-medium">
          <p>Ano:{dateView.ano} /</p>
          <p>Mês:{dateView.mes}</p>
        </div>
        <div className="flex space-x-2 mt-2 items-center justify-center">
          <button
            className=" bg-purple-600 px-3 py-1 text-white shadow-sm rounded-md"
            type="button"
            onClick={() => anterior()}
          >
            Anterior
          </button>
          <button
            className=" bg-purple-600 px-3 py-1 text-white shadow-sm rounded-md"
            type="button"
            onClick={() => proximo()}
          >
            Próximo
          </button>
        </div>
        <div className="bg-gray-100 w-full mt-4 rounded-md shadow-md">
          <div className="grid grid-cols-6 py-2 rounded-t-md bg-black text-white font-semibold w-full">
            <span>ID</span>
            <span>Nome</span>
            <span>Tipo</span>
            <span>Situação</span>
            <span>Data</span>
            <span>Valor</span>
          </div>
          <div className="">
            {data.map((item) => (
              <div key={item.id} className="grid grid-cols-6 py-2">
                <p className="">{item.id}</p>
                <p className="">{item.nome}</p>
                <p className="">
                  {item.tipo === 1 ? (
                    <p className="text-red-600 font-light">Despesa</p>
                  ) : (
                    ""
                  )}
                  {item.tipo === 2 ? (
                    <p className="text-green-600 font-light">Recebimento</p>
                  ) : (
                    ""
                  )}
                </p>
                <p className="">
                  {item.situacao === 1 ? (
                    <p className="text-blue-600 font-light">Pago</p>
                  ) : (
                    ""
                  )}
                  {item.situacao === 2 ? (
                    <p className="text-yellow-600 font-light">Pendente</p>
                  ) : (
                    ""
                  )}
                  {item.situacao === 3 ? (
                    <p className="text-red-600 font-light">Atrasado</p>
                  ) : (
                    ""
                  )}
                </p>
                <p className="">
                  {moment(item.dataPagamento).format("DD/MMM/YYYY")}
                </p>
                <p className="">
                  {new Intl.NumberFormat("pt-PT", {
                    style: "currency",
                    currency: "EUR",
                  }).format(item.valor)}
                </p>
                {/* <p className="">{item.valor}</p> */}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-white bg-gray-500 px-36 py-4 rounded-b-lg">
            <div>
              <strong>Pagos</strong>
            </div>
            <div>
              {new Intl.NumberFormat("pt-PT", {
                style: "currency",
                currency: "EUR",
              }).format(valorPagamento)}
            </div>
            <div>
              <strong>Recebidos</strong>
            </div>
            <div>
              {new Intl.NumberFormat("pt-PT", {
                style: "currency",
                currency: "EUR",
              }).format(valorRecebido)}
            </div>
            <div>
              <strong>Saldo</strong>
            </div>
            <div>
              {new Intl.NumberFormat("pt-PT", {
                style: "currency",
                currency: "EUR",
              }).format(saldo)}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Home;
