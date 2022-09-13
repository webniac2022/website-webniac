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
        <h1 className="text-center font-bold text-5xl text-lightContrastText dark:text-darkHeading">
          Contact
        </h1>
      </motion.div>

      {/* form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-[90vw] sm:w-[60vw] md:w-[60vw] lg:w-[50vw] flex justify-center"
      >
        <form className="flex-grow gap-6 flex flex-col items-center">
          <div className="flex flex-col gap-2 w-[70%]">
            <label className="text-xl" htmlFor="nume">
              Nume
            </label>
            <input
              className="p-3 rounded"
              id="nume"
              type="text"
              placeholder="Nume"
            />
          </div>
          <div className="flex flex-col gap-2 w-[70%]">
            <label className="text-xl" htmlFor="email">
              Email
            </label>
            <input
              className="p-3 rounded"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-2 w-[70%]">
            <label className="text-xl" htmlFor="mesaj">
              Mesaj
            </label>
            <textarea
              className="p-3 rounded"
              id="mesaj"
              aria-multiline={true}
              rows={4}
              placeholder="Mesaj"
            />
          </div>
          <div className="flex flex-col p-3">
            <button
              type="submit"
              value="Submit"
              className="bg-lightComponents dark:bg-darkComponents text-darkContrastText dark:text-darkContrastText w-28 p-1 rounded text-center hover:cursor-pointer hover:scale-[.95]"
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
