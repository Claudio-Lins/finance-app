import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  let dataAtual = new Date();
  let ano = dataAtual.getFullYear();
  let mes = dataAtual.getMonth() + 1;

  const [dateView, setDateView] = useState({
    ano,
    mes,
  });

  const anterior = async () => {
    if (dateView.mes === 1) {
      setDateView({
        ano: dateView.ano - 1,
        mes: 12,
      });
    } else {
      setDateView({
        ano: dateView.ano,
        mes: dateView.mes - 1,
      });
    }
  };
  const proximo = async () => {
    if (dateView.mes === 12) {
      setDateView({
        ano: dateView.ano + 1,
        mes: 1,
      });
    } else {
      setDateView({
        ano: dateView.ano,
        mes: dateView.mes + 1,
      });
    }
  };

  const listarExtrato = async (e) => {
    let valores = [
      {
        id: 1,
        nome: "Uber",
        valor: 23.45,
        tipo: 1,
        situacao: "x"
      },
      {
        id: 2,
        nome: "Bolt",
        valor: 3.45,
        tipo: 1,
        situacao: "x"
      },
      {
        id: 3,
        nome: "Combustível",
        valor: 70.89,
        tipo: 2,
        situacao: "y"
      },
      {
        id: 4,
        nome: "FreeNow",
        valor: 10.19,
        tipo: 1,
        situacao: "x"
      },
    ];
    setData(valores);
  };

  useEffect(() => {
    listarExtrato();
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-purple-600 w-full h-[100px] flex justify-center items-center">
        <h1 className=" font-bold text-4xl text-white tracking-wide">
          Controle Financeiro
        </h1>
      </header>

      <main className="flex flex-col p-4 items-center justify-center w-full flex-1 text-center">
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
          <div className="grid grid-cols-5 py-2 rounded-t-md bg-black text-white font-semibold w-full">
            <span>ID</span>
            <span>Nome</span>
            <span>Tipo</span>
            <span>Situação</span>
            <span>Valor</span>
          </div>
          <div className="">
            {data.map((item) => (
              <div key={item.id} className="grid grid-cols-5 py-2">
                <p className="">{item.id}</p>
                <p className="">{item.nome}</p>
                <p className="">
                  {item.tipo === 1 ? (
                    <p className="text-green-600 font-black">+</p>
                  ) : (
                    <p className="text-red-600 font-black">-</p>
                  )}
                </p>
                <p className="">{item.situacao}</p>
                <p className="">{item.valor}</p>
              </div>
            ))}
            <div></div>
          </div>
        </div>
      </main>
    </div>
  );
}
