import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "../../lib/external-components";

const useParallax = (value, distance) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const Principii = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useParallax(scrollYProgress, 30);
  const y2 = useParallax(scrollYProgress, 40);
  const y3 = useParallax(scrollYProgress, 50);
  const y4 = useParallax(scrollYProgress, 60);

  return (
    <div className="w-full mt-16 mb-5 sm:mb-0">
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
            }}
            className="w-[150px] h-[150px] grow flex flex-row items-center justify-center bg-gradient-to-r from-[#ff00cc] to-[#333399] rounded-[50%]"
          >
            <h3 className="text-white text-lg font-bold">Functionalitate</h3>
          </motion.div>
        </div>
        <div className="">
          <motion.div
            style={{
              y: y2,
            }}
            className="w-[150px] h-[150px] grow flex flex-row items-center justify-center bg-gradient-to-r from-[#bdc3c7] to-[#fffc00] rounded-[50%]"
          >
            <h3 className="text-white text-lg font-bold">Accesibilitate</h3>
          </motion.div>
        </div>
        <div className="">
          <motion.div
            style={{
              y: y3,
            }}
            className="w-[150px] h-[150px] grow flex flex-row items-center justify-center bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] rounded-[50%]"
          >
            <h3 className="text-white text-lg font-bold">Performanta</h3>
          </motion.div>
        </div>
        <div className="">
          <motion.div
            style={{
              y: y4,
            }}
            className="w-[150px] h-[150px] grow flex flex-row items-center justify-center bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-[50%]"
          >
            <h3 className="text-white text-lg font-bold">Scalabilitate</h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Principii;
