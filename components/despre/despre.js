import React from "react";
import Image from "next/future/image";
import { motion } from "../../lib/external-components";

const data = [
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663929719/WEBNIAC/idea_ieftcg.svg",
    alt: "ideile devin realitate",
    content: "Transformam ideile tale in produse digitale exceptionale.",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663930020/WEBNIAC/aplicatii_c22a73.svg",
    alt: "dezvoltare software",
    content: "Cream aplicatii web dezvoltate de la zero.",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663929867/WEBNIAC/website-uri_tefxhx.svg",
    alt: "dezvoltare software",
    content: "Cream website-uri exceptionale si rapide.",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663930154/WEBNIAC/ecommerce_llyqx0.svg",
    alt: "dezvoltare software",
    content: "Cream magazine online.",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663930290/WEBNIAC/responsive_uzc0xb.svg",
    alt: "cross browser compatibility",
    content:
      "Design full responsive, personalizat si reprezentativ serviciilor sau produselor tale.",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663930409/WEBNIAC/securitate_a726ie.svg",
    alt: "securitate sporita",
    content: "Securitate sporita a produselor datorita abordarii headless.",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663930523/WEBNIAC/testare_mqqeyq.svg",
    alt: "testare",
    content: "Toate aplicatiile sun testate inainte de lansare",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663930616/WEBNIAC/seo_gqki56.svg",
    alt: "optimizare SEO",
    content: "Optimizare SEO",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663930703/WEBNIAC/mentenanta_gsicux.svg",
    alt: "mentenanta",
    content: "Mentenanta",
  },
];

const Despre = () => {
  return (
    <div className="w-full flex flex-col gap-10 mt-10 p-2" id="despre">
      {data.map((d, i) => (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          key={i}
          className="grid grid-cols-3 p-2"
          style={{
            background: "rgba( 255, 255, 255, 0.1 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 9.5px )",
            WebkitBackdropFilter: "blur( 9.5px )",
            borderRadius: "10px",
          }}
        >
          <div className="col-span-1 flex flex-row justify-center items-center">
            <Image
              src={d.imgSrc}
              alt={d.alt}
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-span-2 flex flex-row items-center">
            <h2 className="font-bold text-lg sm:text-5xl text-left">
              {d.content}
            </h2>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Despre;
