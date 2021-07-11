import Head from "next/head";
import { useState } from "react";

export default function Home({ props }) {
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className='flex space-x-1 text-lg font-medium'>
          <p>Ano:{dateView.ano} /</p>
          <p>Mês:{dateView.mes}</p>
        </div>
        <div className="flex space-x-2 mt-2 items-center justify-center">
          <button
            className=" bg-blue-500 px-3 py-1 text-white shadow-sm rounded-md"
            type="button"
            onClick={() => anterior()}
          >
            Anterior
          </button>
          <button
            className=" bg-blue-500 px-3 py-1 text-white shadow-sm rounded-md"
            type="button"
            onClick={() => proximo()}
          >
            Próximo
          </button>
        </div>
      </main>
    </div>
  );
}
