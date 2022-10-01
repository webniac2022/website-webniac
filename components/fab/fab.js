import { IoMdArrowDropup } from "react-icons/io";
import { useRouter, motion } from "../../lib/external-components";
import { useAppContext } from "../../context/context";

const Fab = () => {
  const { showFab } = useAppContext();

  const router = useRouter();
  return (
    <motion.div
      onClick={() => router.push("/")}
      className={`${
        !showFab
          ? "hidden"
          : "fixed bottom-5 border-1 border-white right-5 z-20 w-14 h-14 rounded-[50%] flex flex-row justify-center items-center bg-white dark:bg-darkContrastText shadow-md hover:cursor-pointer animate-pulse"
      }`}
    >
      <IoMdArrowDropup className="fill-[black] dark:fill-[white]" size={25} />
    </motion.div>
  );
};

export default Fab;
