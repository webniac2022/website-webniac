import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "../../lib/external-components";
import Image from "next/future/image";

const useParallax = (value, distance) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const Principii = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useParallax(scrollYProgress, 200);
  const y2 = useParallax(scrollYProgress, 100);

  console.log(scrollYProgress);

  return (
    <div ref={ref} className="w-full mt-16 flex flex-row gap-5 justify-center">
      <div className="">
        <motion.div
          style={{ y: y1 }}
          className="w-[150px] h-[150px] [border-radius:50%] bg-cyan-400 grow"
        ></motion.div>
      </div>
      <div className="">
        <motion.div
          style={{ y: y2 }}
          className="w-[150px] h-[150px] [border-radius:50%] bg-red-400 grow"
        ></motion.div>
      </div>
    </div>
  );
};

export default Principii;
