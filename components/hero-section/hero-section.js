import React from "react";
import { motion } from "../../lib/external-components";
import AnimatedText from "../animated-text/animated-text";
import Link from "next/link";
import Image from "next/future/image";

const HeroSection = () => {
  return (
    <div className="w-full grid grid-cols-12 overflow-hidden" id="/">
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [50, 55, 20000],
          transition: { duration: 2.5, repeat: Infinity, repeatDelay: 1 },
        }}
        className="col-span-1 flex items-center justify-center"
      >
        <Image
          src="https://res.cloudinary.com/webniac/image/upload/v1662580106/WEBNIAC/Asset_1_q0tsx3.svg"
          alt="rocket science"
          width={150}
          height={150}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </motion.div>
      <div className="col-span-4 flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/webniac/image/upload/v1663852539/WEBNIAC/Asset_2_lohllq.svg"
          alt="globe"
          width={150}
          height={150}
          style={{ width: "90%", height: "auto" }}
          priority
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 5, x: 50 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="min-h-[50vh] col-span-7 flex flex-col justify-end items-end p-1 gap-2"
      >
        <h1 className="text-darkContrastText dark:text-darkHeading text-6xl sm:text-9xl text-right font-bold">
          <AnimatedText text="WEBNIAC" />
        </h1>
        <h2
          className="text-darkContrastText dark:text-darkHeading text-sm sm:text-xl text-right font-bold"
          style={{
            background: "-webkit-linear-gradient(#833ab4, #fd1d1d, #fcb045)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Cream produse digitale inedite, performante, accesibile si scalabile.
        </h2>
        <h2 className="text-white text-right font-bold">Aplicatii web</h2>
        <h2 className="text-white text-right font-bold">Website-uri</h2>
        <h2 className="text-white text-right font-bold">Magazine online</h2>
        <h2 className="text-white text-right font-bold">UI/UX design</h2>
        <h2 className="text-white text-right font-bold">Optimizare SEO</h2>
        <h2 className="text-white text-right font-bold">Mentenanta</h2>
        <div className="flex flex-row">
          <Link href="/#contact">
            <motion.button
              whileHover={{ scale: 0.95, opacity: 0.65 }}
              className="p-2 text-white border-2 border-white"
              style={{
                background: "rgba( 255, 255, 255, 0.1 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 9.5px )",
                WebkitBackdropFilter: "blur( 9.5px )",
                borderRadius: "10px",
                padding: 10,
              }}
            >
              Solicita oferta
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
