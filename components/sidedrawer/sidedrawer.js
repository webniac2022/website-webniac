import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { useAppContext } from "../../context/context";
import { CgClose } from "react-icons/cg";
const SideDrawer = ({ tabs }) => {
  const { toggleDrawer, showDrawer } = useAppContext();
  return (
    <div className="md:hidden flex justify-end items-center pr-2">
      {showDrawer ? (
        <CgClose
          onClick={toggleDrawer}
          size={35}
          className="fill-lightComponents dark:fill-darkComponents hover:cursor-pointer"
        />
      ) : (
        <HiMenuAlt4
          onClick={toggleDrawer}
          size={35}
          className="fill-lightComponents dark:fill-darkComponents hover:cursor-pointer"
        />
      )}
    </div>
  );
};

export default SideDrawer;
