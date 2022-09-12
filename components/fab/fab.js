import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { useRouter } from "../../lib/external-components";
import { useAppContext } from "../../context/context";
// show Fab only when header in view
const Fab = () => {
  const { showFab } = useAppContext();
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className={`${
        !showFab
          ? "hidden"
          : "fixed bottom-5 border-1 border-white right-5 z-30 w-14 h-14 rounded-[50%] flex flex-row justify-center items-center bg-white shadow-md hover:cursor-pointer"
      }`}
    >
      <IoMdArrowDropup className="fill-[black]" size={25} />
    </div>
  );
};

export default Fab;
