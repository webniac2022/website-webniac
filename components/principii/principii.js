import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "../../lib/external-components";
import Image from "next/future/image";

const useParallax = (value, distance) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const Principii = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useParallax(scrollYProgress, 50);
  const y2 = useParallax(scrollYProgress, 70);
  const y3 = useParallax(scrollYProgress, 90);
  const y4 = useParallax(scrollYProgress, 110);

  return (
    <div className="w-full mt-16 mb-16">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex flex-row justify-center mb-16"
      >
        <h2 className="font-bold text-6xl sm:text-8xl text-lightContrastText dark:text-darkHeading">
          Principii
        </h2>
      </motion.div>
      <div ref={ref} className=" flex flex-wrap gap-5 justify-center">
        <div className="">
          <motion.div
            style={{
              y: y1,
              background: "rgba( 255, 255, 255, 0.1 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 9.5px )",
              WebkitBackdropFilter: "blur( 9.5px )",
              borderRadius: "50%",
              padding: 10,
            }}
            className="w-[150px] h-[150px] grow flex flex-row items-center justify-center"
          >
            <h3 className="text-lg font-bold">Functionalitate</h3>
          </motion.div>
        </div>
        <div className="">
          <motion.div
            style={{
              y: y2,
              background: "rgba( 255, 255, 255, 0.1 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 9.5px )",
              WebkitBackdropFilter: "blur( 9.5px )",
              borderRadius: "50%",
              padding: 10,
            }}
            className="w-[150px] h-[150px] grow flex flex-row items-center justify-center"
          >
            <h3 className="text-lg font-bold">Accesibilitate</h3>
          </motion.div>
        </div>
        <div className="">
          <motion.div
            style={{
              y: y3,
              background: "rgba( 255, 255, 255, 0.1 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 9.5px )",
              WebkitBackdropFilter: "blur( 9.5px )",
              borderRadius: "50%",
              padding: 10,
            }}
            className="w-[150px] h-[150px] grow flex flex-row items-center justify-center"
          >
            <h3 className="text-lg font-bold">Performanta</h3>
          </motion.div>
        </div>
        <div className="">
          <motion.div
            style={{
              y: y4,
              background: "rgba( 255, 255, 255, 0.1 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 9.5px )",
              WebkitBackdropFilter: "blur( 9.5px )",
              borderRadius: "50%",
              padding: 10,
            }}
            className="w-[150px] h-[150px] grow flex flex-row items-center justify-center"
          >
            <h3 className="text-lg font-bold">Scalabilitate</h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Principii;
