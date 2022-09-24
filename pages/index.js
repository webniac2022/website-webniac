import { useScroll } from "../lib/external-components";
import { useEffect } from "react";
import { useAppContext } from "../context/context";
import Drawer from "../components/sidedrawer/drawer";
import HeroSection from "../components/hero-section/hero-section";
import AbordareaNoastra from "../components/abordarea-noastra/abordarea-noastra";
import Tehnologii from "../components/tehnologii/tehnologii";
import Portofoliu from "../components/portofoliu/portofoliu";
import Contact from "../components/contact/contact";
import Principii from "../components/principii/principii";
import Footer from "../components/footer/footer";
import Cookies from "../components/cookies-policy/cookies";
import HeroImage from "../components/hero-image/hero-image";
import Despre from "../components/despre/despre";
import Servicii from "../components/servicii/servicii";

export default function Home() {
  const { scrollY } = useScroll();
  const { setShowFab, showDrawer, showCookies } = useAppContext();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 350) {
        setShowFab(true);
      } else setShowFab(false);
    });
  }, []);

  return (
    <div className="p-1 flex flex-col min-h-full overflow-x-hidden items-center">
      {showDrawer && <Drawer />}
      {showCookies && <Cookies />}
      <HeroSection />
      <HeroImage />
      <Despre />
      <Principii />
      <AbordareaNoastra />
      <Tehnologii />
      <Servicii />
      <Portofoliu />
      <Contact />
      <Footer />
    </div>
  );
}
