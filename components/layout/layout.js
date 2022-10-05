import { useEffect, useState } from "react";
import Header from "../header/header";
import Head from "next/head";
import {
  useScroll,
  motion,
  useSpring,
  useRouter,
} from "../../lib/external-components";
import ModalDrawer from "../sidedrawer/modal-drawer";
import Drawer from "../menu-drawer/drawer";
import { useAppContext } from "../../context/context";
import Script from "next/script";
import CookieSettings from "../aditional-settings-cookie-screen/cookie-settings-screen";
import CookieConsent from "../cookie-consent/cookie-consent";
import { getCookie } from "cookies-next";

const Layout = ({ children }) => {
  const { showDrawer, state, dispatch } = useAppContext();
  const { scrollYProgress } = useScroll();
  const consent = getCookie("localConsent");
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const router = useRouter();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[5px] bg-white z-30"
        style={{ scaleX: scaleX }}
      ></motion.div>
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
          });
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_TAG_MANAGER}');`,
        }}
      />
      {consent === true && (
        <Script
          id="consupd"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
          }}
        />
      )}
      <Head>
        <title>
          WEBNIAC - Dezvoltare web custom | Solutii digitale inedite,
          performante, accesibile si scalabile
        </title>
        <meta property="og:title" content="WEBNIAC - Dezvoltare web custom" />
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
        <meta
          name="google-site-verification"
          content="I9nwWNGlz8zjPf-A72me8syiJbGN-uvifbSzqiGx_dw"
        />
      </Head>
      <Header />
      <div className="min-h-screen flex flex-col bg-lightBg dark:bg-darkBg">
        <main className="flex-grow">
          {showDrawer && <ModalDrawer component={<Drawer />} />}
          {state.showCookieSettingsScreen && (
            <ModalDrawer component={<CookieSettings />} />
          )}
          <CookieConsent />

          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
