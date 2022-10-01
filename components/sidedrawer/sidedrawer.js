import { HiMenuAlt4 } from "react-icons/hi";
import { useAppContext } from "../../context/context";

const SideDrawer = () => {
  const { toggleDrawer } = useAppContext();
  return (
    <div className="md:hidden flex justify-end items-center">
      <HiMenuAlt4
        onClick={toggleDrawer}
        size={35}
        className="fill-white dark:fill-darkContrastText hover:cursor-pointer"
      />
    </div>
  );
};

export default SideDrawer;
