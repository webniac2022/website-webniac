import React, { useEffect, useCallback, useState } from "react";
import { motion, useEmblaCarousel } from "../../lib/external-components";
import Image from "next/future/image";
import Link from "next/link";
const data = [
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663046110/WEBNIAC/pexels-sagui-andrea-618833_uej8z5.jpg",
    link: "https://stc-systems.vercel.app",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663046110/WEBNIAC/pexels-joyston-judah-933054_ketegd.jpg",
    link: "https://stc-systems.vercel.app",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663046110/WEBNIAC/pexels-daniel-frank-287229_f8zd7i.jpg",
    link: "https://stc-systems.vercel.app",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1663046110/WEBNIAC/pexels-tyler-lastovich-772803_wiqigx.jpg",
    link: "https://stc-systems.vercel.app",
  },
];

const Portofoliu = () => {
  const [emblaRef] = useEmblaCarousel({ align: "start", slidesToScroll: 1 });

  return (
    <div className="w-full flex flex-col gap-16">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex flex-row justify-center"
      >
        <h2 className="text-6xl sm:text-8xl font-bold text-center text-lightContrastText dark:text-darkHeading">
          Portofoliu
        </h2>
      </motion.div>
      {/* carousel */}
      <div className="overflow-hidden hover:cursor-grab" ref={emblaRef}>
        <div className="flex flex-row gap-2">
          {data.map((d, i) => (
            <div key={i} className="flex-shrink-0">
              <Link href={d.link}>
                <Image src={d.imgSrc} alt={d.link} width={300} height={300} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portofoliu;
