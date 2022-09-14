import React from "react";
import { Image, motion } from "../../lib/external-components";

const data = [
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1662528937/WEBNIAC/Asset_12_wunker.svg",
    title: "1. Gandim",
    alt: "",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1662528937/WEBNIAC/Asset_13_vud0i3.svg",
    title: "2. Planificam",
    alt: "",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1662528935/WEBNIAC/Asset_6_iggptt.svg",
    title: "3. Proiectam",
    alt: "",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1662528933/WEBNIAC/Asset_2_ysho5y.svg",
    title: "4. Cream",
    alt: "",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1662528935/WEBNIAC/Asset_10_dcoqcb.svg",
    title: "5. Testam",
    alt: "",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1662528935/WEBNIAC/Asset_9_clohg9.svg",
    title: "6. Lansam",
    alt: "",
  },
];

const SecondSection = () => {
  return (
    <div className="w-full flex flex-col items-center mt-10" id="despre">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex justify-center mb-10"
      >
        <h1 className="text-lightContrastText dark:text-darkHeading text-center text-5xl p-2 font-bold">
          Abordarea noastra
        </h1>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-2 w-full">
        {data.map((im, i) => (
          <motion.div
            initial={{ x: -40, y: 40, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.1 * i,
              type: "spring",
              stiffness: 100,
            }}
            className="bg-lightComponents dark:bg-darkComponents rounded shadow-md flex flex-col gap-2 p-3"
            key={i}
          >
            <h3 className="text-lg text-center text-darkContrastText dark:text-darkContrastText">
              {im.title}
            </h3>
            <div className="block">
              <Image
                src={im.imgSrc}
                alt={im.alt}
                layout="responsive"
                width={1920}
                height={1080}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
