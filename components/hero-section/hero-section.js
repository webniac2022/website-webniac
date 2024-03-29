import { motion, useScroll } from "../../lib/external-components";
import AnimatedText from "../animated-text/animated-text";
import Link from "next/link";
import Image from "next/future/image";
import { useParallax } from "../principii/principii";
import { useRef } from "react";

const HeroSection = ({
  data: {
    title,
    subtitle,
    globe,
    rocket,
    firstServicii: { first, second, third, fourth, fifth, sixth },
  },
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useParallax(scrollYProgress, 35);

  return (
    <div className="w-full grid grid-cols-12 overflow-hidden" id="/">
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [50, 55, 150, 155, 20000],
          transition: { duration: 4, repeat: Infinity, repeatDelay: 1 },
        }}
        ref={ref}
        style={{ y: y1 }}
        className="col-span-1 flex items-center justify-center"
      >
        <Image
          src={rocket.sourceUrl}
          alt={rocket.altText}
          width={150}
          height={150}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </motion.div>
      <motion.div className="col-span-5 flex items-center justify-center">
        <Image
          src={globe.sourceUrl}
          alt={globe.altText}
          width={150}
          height={150}
          style={{ width: "90%", height: "auto" }}
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 5, x: 50 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="min-h-[50vh] col-span-6 flex flex-col justify-end items-end p-1 gap-2"
      >
        <h1 className="text-darkHeading dark:text-darkContrastText text-6xl sm:text-9xl text-right font-bold">
          <AnimatedText text={title} />
        </h1>
        <h2
          className="text-darkContrastText dark:text-darkHeading text-sm sm:text-xl text-right font-bold"
          style={{
            background: "-webkit-linear-gradient(#833ab4, #fd1d1d, #fcb045)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {subtitle}
        </h2>
        <h2 className="text-white dark:text-darkContrastText text-right font-bold">
          {first}
        </h2>
        <h2 className="text-white dark:text-darkContrastText text-right font-bold">
          {second}
        </h2>
        <h2 className="text-white dark:text-darkContrastText text-right font-bold">
          {third}
        </h2>
        <h2 className="text-white dark:text-darkContrastText text-right font-bold">
          {fourth}
        </h2>
        <h2 className="text-white dark:text-darkContrastText text-right font-bold">
          {fifth}
        </h2>
        <h2 className="text-white dark:text-darkContrastText text-right font-bold">
          {sixth}
        </h2>
        <div className="flex flex-row">
          <Link href="/#contact">
            <motion.button
              whileHover={{ scale: 0.95, opacity: 0.65 }}
              className="p-2 text-white font-bold dark:text-darkContrastText border-2 border-white dark:border-darkContrastText"
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
