import React from "react";
import Image from "next/future/image";
import { motion } from "../../lib/external-components";

const data = [
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663664464/WEBNIAC/Asset_3_kmd0km.svg",
    alt: "ideile devin realitate",
    content:
      "Iti transformam ideile si viziunea in realitate! Cream aplicatii web, website-uri, magazine online personalizate, de la zero.",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663668345/WEBNIAC/Asset_1_s9qi9r.svg",
    alt: "imagine reprezentand performanta marita",
    content:
      "Performanta imbatabila si securitate sporita datorita tehnologiilor utilizate si a abordarii headless (noul trend la nivel global).",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663670764/WEBNIAC/Asset_1_ceryrv.svg",
    alt: "cross browser compatibility",
    content:
      "Design full responsive, personalizat si reprezentativ serviciilor sau produselor tale.",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663671516/WEBNIAC/Asset_1_enb24j.svg",
    alt: "optimizare SEO",
    content: "Optimizare SEO",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663671737/WEBNIAC/Asset_1_sdry4s.svg",
    alt: "promovare",
    content: "Promovare",
  },
];

const FirstSection = () => {
  return (
    <div className="w-full flex flex-col gap-16 mt-10">
      {data.map((d, i) => (
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, bounce: 20 }}
          key={i}
          className="flex flex-row gap-2 items-center p-2"
        >
          <Image
            src={d.imgSrc}
            alt={d.alt}
            width={1920}
            height={1080}
            style={{ width: "35%", height: "auto" }}
          />
          <div className="flex flex-row justify-center">
            <h2 className="text-sm sm:text-2xl md:text-2xl text-start p-6">
              {d.content}
            </h2>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FirstSection;
