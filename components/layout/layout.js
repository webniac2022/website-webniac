import React from "react";
import Header from "../header/header";
import Head from "next/head";
import Fab from "../fab/fab";
import { useScroll, motion, useSpring } from "../../lib/external-components";

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-[5px] bg-red-500 z-30"
        style={{ scaleX: scaleX }}
      ></motion.div>
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
      <Fab aria-label="Go to top" />
    </>
  );
};

export default Layout;
