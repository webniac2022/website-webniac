import React from "react";
import { useAppContext } from "../../context/context";
import { motion } from "../../lib/external-components";
import { AiOutlineClose } from "react-icons/ai";

const Cookies = () => {
  const { toggleCookies } = useAppContext();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, width: "0%", height: "0%" }}
      animate={{ opacity: 1, width: "100%", height: "100%" }}
      transition={{
        duration: 0.5,
        type: "spring",
        bounce: 1,
        stiffness: 100,
      }}
      className="top-0 left-0 fixed w-0 h-0 bg-lightBg dark:bg-darkBg z-30 overflow-hidden"
    >
      <div className="flex flex-row justify-end">
        <AiOutlineClose
          onClick={toggleCookies}
          className="mt-[5vh] mr-[10vw] fill-lightComponents dark:fill-darkComponents hover:cursor-pointer"
          size={30}
        />
      </div>
      <h2>Cookies policy</h2>
    </motion.div>
  );
};

export default Cookies;
