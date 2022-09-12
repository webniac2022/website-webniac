import React from "react";
import { Image, motion } from "../../lib/external-components";

const FirstSection = () => {
  return (
    <div className="w-full grid grid-cols-12 mt-5 overflow-hidden" id="/">
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: "200vw",
          transition: { duration: 2, repeat: 1 },
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
      <div className="min-h-[50vh] col-span-10 flex flex-col justify-end p-1 gap-2">
        <h1 className="text-darkContrastText dark:text-darkHeading text-5xl sm:text-7xl text-right font-bold">
          Dezvoltare web <br /> custom
        </h1>
        <h2 className="text-lightComponents dark:text-darkComponents text-right font-bold">
          Aplicatii web
        </h2>
        <h2 className="text-lightComponents dark:text-darkComponents text-right font-bold">
          Website-uri
        </h2>
        <h2 className="text-lightComponents dark:text-darkComponents text-right font-bold">
          Ecommerce websites
        </h2>
        <h2 className="text-lightComponents dark:text-darkComponents text-right font-bold">
          Optimizare SEO
        </h2>
        <h2 className="text-lightComponents dark:text-darkComponents text-right font-bold">
          Responsive design
        </h2>
      </div>
    </div>
  );
};

export default FirstSection;
