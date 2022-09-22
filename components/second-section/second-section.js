import React from "react";
import { Image, motion } from "../../lib/external-components";

const data = [
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663674911/WEBNIAC/Asset_1_gcizec.svg",
    title: "1. Gandim",
    alt: "gandim",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663675037/WEBNIAC/Asset_1_ntpetf.svg",
    title: "2. Planificam",
    alt: "planificam",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663675162/WEBNIAC/Asset_1_exsv3d.svg",
    title: "3. Proiectam",
    alt: "proiectam",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663675329/WEBNIAC/Asset_1_im8amt.svg",
    title: "4. Cream",
    alt: "cream",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663675464/WEBNIAC/Asset_1_z68ols.svg",
    title: "5. Testam",
    alt: "testam",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663675577/WEBNIAC/Asset_1_dblvjf.svg",
    title: "6. Lansam",
    alt: "lansam",
  },
];

const SecondSection = () => {
  return (
    <div className="w-full flex flex-col items-center mt-28" id="despre">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex justify-center mb-10"
      >
        <h1 className="text-lightContrastText dark:text-darkHeading text-center text-5xl sm:text-8xl p-2 font-bold">
          Abordarea noastra
        </h1>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-2 w-full">
        {data.map((im, i) => (
          <motion.div
            initial={{ opacity: 0, x: -100, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              bounce: 1,
              damping: 10,
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
