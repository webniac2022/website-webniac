import React from "react";
import { motion, Image } from "../../lib/external-components";

const data = [
  { title: "UI/UX Design", id: "ui" },
  { title: "Branding", id: "branding" },
  { title: "Dezvoltare aplicatii web", id: "apps" },
  { title: "Dezvoltare Website-uri de prezentare", id: "website" },
  { title: "Dezvoltare platforme ecommerce", id: "ecommerce" },
  { title: "Optimizare SEO", id: "seo" },
  { title: "Promovare", id: "promovare" },
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
    <div className="w-full flex mt-16 flex-col gap-16 mb-16" id="servicii">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex flex-row justify-center"
      >
        <h2 className="text-5xl font-bold text-lightContrastText dark:text-darkHeading">
          Servicii
        </h2>
      </motion.div>
      {/* Content servicii */}
      <motion.div className="flex flex-col gap-16 items-center">
        {data.map((d, i) => (
          <motion.div
            layout
            style={{ rotateY: 160 }}
            transition={{ layout: { duration: 2 } }}
            key={d}
            className="rounded w-[90vw] sm:w-[50vw]  h-[30vh] shadow-sm bg-lightComponents dark:bg-darkComponents flex flex-row items-center justify-end"
          >
            <button className="rounded bg-darkComponents dark:bg-lightComponents w-[120px] h-[40px]">
              More
            </button>
          </motion.div>
        ))}
      </motion.div>
      {/* <div className="flex flex-col gap-24 items-center">
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
      </div> */}
    </div>
  );
};

export default FourthSection;
