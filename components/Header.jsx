import Link from 'next/link';

export default () => {
  return (
    <header className="bg-purple-600 px-36 mb-4 w-full h-[100px] flex justify-between items-center">
      <h1 className=" font-bold text-4xl text-white tracking-wide">
        Controle Financeiro
      </h1>
      <Link href="/Cadastrar">
        <a className="px-3 py-1 bg-purple-300 text-purple-900 rounded-md shadow-md hover:border-2 hover:bg-purple-600 hover:text-white hover:shadow-inner">
          Cadastrar
        </a>
      </Link>
    </header>
  );
};
