import React from "react";
import Header from "../header/header";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>WEBNIAC - Custom web development</title>
        <meta
          name="description"
          content="Dezvoltare web custom - Aplicatii web, website-uri, optimizare SEO, promovare, design unic, performanta imbatabila datorita tehnologiilor utilizate"
        />
      </Head>
      <Header />
      <div className="min-h-screen flex flex-col bg-lightBg dark:bg-darkBg">
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
};

export default Layout;
