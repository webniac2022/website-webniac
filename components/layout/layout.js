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
        className="fixed top-0 left-0 right-0 h-[5px] bg-white z-30"
        style={{ scaleX: scaleX }}
      ></motion.div>
      <Head>
        <title>
          WEBNIAC - Custom web development | Solutii digitale inedite,
          performante, accesibile si scalabile
        </title>
        <meta property="og:title" content="WEBNIAC - Custom web development" />
        <meta
          name="description"
          content="WEBNIAC - Solutii digitale inedite, performante, accesibile si scalabile"
        />
        <meta
          property="og:description"
          content="WEBNIAC - Solutii digitale inedite, performante, accesibile si scalabile"
        />
        <meta
          content="https://res.cloudinary.com/webniac/image/upload/v1662567294/WEBNIAC/webniac_logo_ordcsr.svg"
          property="og:image"
        />
        <meta
          name="description"
          content="Dezvoltare web custom - Aplicatii web, website-uri, optimizare SEO, design unic, performanta imbatabila datorita tehnologiilor utilizate"
        />
        <meta
          name="description"
          content="Dezvoltam solutii digitale inedite, performante, accesibile si scalabile"
        />
        <meta
          name="description"
          content="Digitalizam procesele din cadrul companiei tale prin dezvoltarea de aplicatii web."
        />
        <meta
          name="description"
          content="Construim website-uri unice, inedite, extrem de performante si scalabile"
        />
        <meta
          name="description"
          content="Construim magazine online performante si scalabile direct proportional cu afacerea ta!"
        />
        <meta
          name="description"
          content="Utilizam abordarea headless - separarea layer-ului responsabil cu datele de layer-ul aferent frontend-ului"
        />
        <meta
          name="description"
          content="Custom web development | Aplicatii web | Website-uri | Magazine online | UI/UX Design | SEO | Mentenanta"
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
