import React from "react";
import { motion, Image } from "../../lib/external-components";
import AnimatedText from "../animated-text/animated-text";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-full grid grid-cols-12 mt-5 overflow-hidden" id="/">
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [50, 55, 20000],
          transition: { duration: 1.5 },
        }}
        className="col-span-2 flex items-center justify-center"
      >
        <Image
          src="https://res.cloudinary.com/webniac/image/upload/v1662580106/WEBNIAC/Asset_1_q0tsx3.svg"
          alt="rocket science"
          width={120}
          height={120}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 5, x: 50 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="min-h-[50vh] col-span-10 flex flex-col justify-end items-end p-1 gap-2"
      >
        <h1 className="text-darkContrastText dark:text-darkHeading text-5xl sm:text-7xl text-right font-bold">
          <AnimatedText text="WEBNIAC" />
        </h1>
        <h2 className="text-darkContrastText dark:text-darkHeading text-sm sm:text-xl text-right font-bold">
          Cream produse digitale inedite, <br /> performante, accesibile si
          scalabile. <br />
        </h2>
        <h2 className="text-lightComponents dark:text-darkComponents text-right font-bold">
          Aplicatii web
        </h2>
        <h2 className="text-lightComponents dark:text-darkComponents text-right font-bold">
          Website-uri
        </h2>
        <h2 className="text-lightComponents dark:text-darkComponents text-right font-bold">
          Magazine online
        </h2>
        <h2 className="text-lightComponents dark:text-darkComponents text-right font-bold">
          UI/UX design
        </h2>
        <h2 className="text-lightComponents dark:text-darkComponents text-right font-bold">
          Optimizare SEO
        </h2>
        <h2 className="text-lightComponents dark:text-darkComponents text-right font-bold">
          Promovare
        </h2>
        <div className="flex flex-row">
          <Link href="/#contact">
            <button className="border-2 border-lightComponents dark:border-darkComponents p-2 rounded bg-buttonStyle text-white hover:opacity-[0.8]">
              Solicita oferta
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
