import React from "react";
import { motion } from "../../lib/external-components";

const data = [
  "Aplicatii web",
  "Website-uri de prezentare",
  "Magazine online",
  "Optimizare SEO",
  "Promovare",
];

const cardVariants = {
  offscreen: {
    x: -90,
    y: 50,
  },
  onscreen: {
    x: 0,
    y: 0,
    rotate: -5,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
const FourthSection = () => {
  return (
    <div className="flex mt-16 flex-col gap-16 mb-16">
      {/* Title */}
      <div className="flex flex-row justify-center">
        <h2 className="text-5xl font-bold text-lightContrastText dark:text-darkHeading">
          Servicii
        </h2>
      </div>
      {/* Content servicii */}
      <div className="flex flex-col gap-24 items-center">
        {data.map((d, i) => (
          <motion.div
            className="flex flex-row justify-center items-center rounded w-[70vw] h-[200px] shadow-lg shadow-lightComponents dark:shadow-darkComponents bg-lightComponents dark:bg-darkComponents"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={cardVariants}
            key={d}
          >
            <h3 className="text-center font-bold text-2xl text-darkContrastText">
              {d}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FourthSection;
