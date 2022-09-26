import React from "react";
import Image from "next/future/image";
import { motion } from "../../lib/external-components";

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
          className=""
          key={i}
          style={{
            background: "rgba( 255, 255, 255, 0.1 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 9.5px )",
            WebkitBackdropFilter: "blur( 9.5px )",
            borderRadius: "10px",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center p-3">
            <div className="w-[40%]">
              <Image
                src={d.firstimg.sourceUrl}
                alt={d.firstimg.altText}
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-row justify-center items-center w-[60%]">
              <h6 className="text-white text-sm sm:text-xl md:text-2xl lg:text-4xl">
                {d.content}
              </h6>
            </div>
          </div>
        </motion.div>
      ))}
      {/* {despre.map((d, i) => (
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
              src={d.firstimg.sourceUrl}
              alt={d.firstimg.textAlt}
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
      ))} */}
    </div>
  );
};

export default Despre;
