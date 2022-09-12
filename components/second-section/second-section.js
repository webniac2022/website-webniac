import React from "react";
import { Image } from "../../lib/external-components";

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
      <div className="flex justify-center mb-10">
        <h1 className="text-lightContrastText dark:text-darkHeading text-center text-5xl p-2 font-bold">
          Abordarea noastra
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2 w-full">
        {data.map((im, i) => (
          <div
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
