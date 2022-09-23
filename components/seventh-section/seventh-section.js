import React from "react";
import { motion } from "../../lib/external-components";

const SeventhSection = () => {
  return (
    <div
      className="w-full mt-16 mb-16 flex flex-col gap-16 items-center"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="mt-16 flex flex-row justify-center"
      >
        <h1 className="text-center font-bold text-6xl sm:text-8xl text-lightContrastText dark:text-darkHeading">
          Contact
        </h1>
      </motion.div>

      {/* form */}
      <motion.div
        initial={{ opacity: 0, x: -100, y: -50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          bounce: 1,
          damping: 10,
        }}
        className="w-[90vw] sm:w-[60vw] md:w-[60vw] lg:w-[50vw] flex justify-center"
      >
        <form className="flex-grow gap-6 flex flex-col items-center">
          <div className="flex flex-col gap-2 w-[80%]">
            <label className="text-white text-xl" htmlFor="nume">
              Nume
            </label>
            <input
              style={{
                background: "rgba( 255, 255, 255, 0.1 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 9.5px )",
                WebkitBackdropFilter: "blur( 9.5px )",
                borderRadius: "10px",
                padding: 10,
              }}
              className="p-3 rounded text-white"
              id="nume"
              type="text"
              placeholder="Nume"
            />
          </div>
          <div className="flex flex-col gap-2 w-[80%]">
            <label className="text-white text-xl" htmlFor="email">
              Email
            </label>
            <input
              style={{
                background: "rgba( 255, 255, 255, 0.1 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 9.5px )",
                WebkitBackdropFilter: "blur( 9.5px )",
                borderRadius: "10px",
                padding: 10,
              }}
              className="p-3 rounded text-white"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-2 w-[80%]">
            <label className="text-xl text-white" htmlFor="mesaj">
              Mesaj
            </label>
            <textarea
              style={{
                background: "rgba( 255, 255, 255, 0.1 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 9.5px )",
                WebkitBackdropFilter: "blur( 9.5px )",
                borderRadius: "10px",
                padding: 10,
              }}
              className="p-3 rounded text-white"
              id="mesaj"
              aria-multiline={true}
              rows={4}
              placeholder="Mesaj"
            />
          </div>
          <div className="flex flex-col p-3">
            <button
              style={{
                background: "rgba( 255, 255, 255, 0.1 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 9.5px )",
                WebkitBackdropFilter: "blur( 9.5px )",
                borderRadius: "10px",
                padding: 10,
              }}
              type="submit"
              value="Submit"
              className=" font-bold text-darkContrastText dark:text-darkContrastText w-28 p-1 rounded text-center hover:cursor-pointer hover:scale-[.95]"
            >
              Trimite
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SeventhSection;
