import React from "react";
import { motion, useEmblaCarousel } from "../../lib/external-components";
import Image from "next/future/image";
import Link from "next/link";

const Portofoliu = ({
  data: {
    imagini: { first, second, third },
  },
}) => {
  const [emblaRef] = useEmblaCarousel({ align: "start", slidesToScroll: 1 });
  const formattedData = [first, second, third];

  return (
    <div className="w-full flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex flex-row justify-center mb-10"
      >
        <h2 className="text-6xl sm:text-8xl font-bold text-center text-lightContrastText dark:text-lightHeading">
          Portofoliu
        </h2>
      </motion.div>
      {/* carousel */}
      <div className="overflow-hidden hover:cursor-grab" ref={emblaRef}>
        <div className="flex flex-row gap-5">
          {formattedData.map((d, i) => (
            <div key={i} className="flex-shrink-0">
              <Link href={d.link} passHref>
                <a target="_blank">
                  <Image
                    src={d.img.sourceUrl}
                    alt={d.img.altText}
                    width={300}
                    height={150}
                    style={{
                      borderRadius: 5,
                      height: "auto",
                      boxShadow: "0 8px 12px 0 rgba(255, 255, 255, 0.88)",
                      width: 300,
                      height: 150,
                    }}
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portofoliu;
