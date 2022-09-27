import React, { useState } from "react";
import Image from "next/future/image";
import { motion } from "../../lib/external-components";
import { data } from "autoprefixer";

const variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Despre = ({
  data: { first, second, third, fourth, fifth, sixth, seventh, eight, ninth },
}) => {
  const despre = [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eight,
    ninth,
  ];

  return (
    <div className="w-full flex flex-col gap-5 mt-10 p-2" id="despre">
      {despre.map((d, i) => (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          key={i}
          className="grid grid-cols-6 gap-5 p-2"
          style={{
            background: "rgba( 255, 255, 255, 0.1 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 9.5px )",
            WebkitBackdropFilter: "blur( 9.5px )",
            borderRadius: "10px",
          }}
        >
          <div className="col-span-2">
            <Image
              src={d.firstimg.sourceUrl}
              alt={d.firstimg.altText}
              width={300}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-span-4 flex flex-row justify-center items-center">
            <h6 className="text-white text-xs sm:text-xl md:text-4xl">
              {d.content}
            </h6>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Despre;
