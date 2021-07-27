import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div className=" min-h-screen">
      <Head>
        <link rel="icon" href="/assets/joaninha-512.ico" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
