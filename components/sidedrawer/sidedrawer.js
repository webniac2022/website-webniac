import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";

const SideDrawer = ({ tabs }) => {
  return (
    <div className="md:hidden flex justify-end items-center pr-2">
      <HiMenuAlt4
        size={35}
        className="fill-lightComponents dark:fill-darkComponents hover: cursor-pointer"
      />
    </div>
  );
};

export default SideDrawer;
