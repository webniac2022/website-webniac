import { useScroll } from "../lib/external-components";
import { useEffect } from "react";
import { useAppContext } from "../context/context";
import Drawer from "../components/sidedrawer/drawer";
import HeroSection from "../components/hero-section/hero-section";
import FirstSection from "../components/first-section/first-section";
import SecondSection from "../components/second-section/second-section";
import ThirdSection from "../components/third-section/third-section";
import FourthSection from "../components/fourth-section/fourth-section";
import FifthSection from "../components/fifth-section/fifth-section";
import SixthSection from "../components/sixth-section/sixth-section";
import SeventhSection from "../components/seventh-section/seventh-section";
import Principii from "../components/principii/principii";
import BeforeIntro from "../components/before-intro/before-intro";
import Footer from "../components/footer/footer";
import Cookies from "../components/cookies-policy/cookies";

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
      <BeforeIntro />
      <FirstSection />
      <Principii />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer />
    </div>
  );
}
