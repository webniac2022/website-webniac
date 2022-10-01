import { useAppContext } from "../../context/context";
import { motion } from "../../lib/external-components";
import { AiOutlineClose } from "react-icons/ai";

const Cookies = ({ data }) => {
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
          className="mt-[5vh] mr-[10vw] fill-white hover:cursor-pointer"
          size={30}
        />
      </div>
      <div className="w-full flex flex-col gap-10 mt-10">
        <div className="flex flex-row justify-center">
          <h2 className="text-white dark:text-darkComponents font-bold text-3xl">
            Politica de cookies
          </h2>
        </div>
        <div className="flex flex-row justify-start p-5">
          <p className="text-white dark:text-darkComponents text-sm sm:text-xl">
            {data}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Cookies;
