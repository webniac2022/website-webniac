import React, { useState, useEffect } from "react";
import { Image } from "../../lib/external-components";
import { useAppContext } from "../../context/context";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Navbar from "../navbar/navbar";
import SideDrawer from "../sidedrawer/sidedrawer";
import { useTheme } from "next-themes";

const Header = () => {
  const { tabs } = useAppContext();
  const { theme, setTheme } = useTheme("dark");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <div className="grid grid-cols-12 gap-2 justify-center items-center bg-lightBg dark:bg-darkBg">
      <div className="col-span-3 sm:col-span-2 block">
        <Image
          src="https://res.cloudinary.com/webniac/image/upload/v1662567294/WEBNIAC/webniac_logo_ordcsr.svg"
          alt="Webniac logo - Custom software development"
          layout="responsive"
          width={100}
          height={80}
        />
      </div>
      <div className="col-span-3 sm:col-span-2 flex flex-row justify-center items-center">
        {theme === "dark" ? (
          <BsFillMoonStarsFill
            className="fill-darkComponents hover:cursor-pointer"
            size={20}
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsFillSunFill
            className="fill-lightComponents hover:cursor-pointer"
            size={20}
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
      <div className="col-span-6 sm:col-span-8">
        <Navbar tabs={tabs} />
        <SideDrawer tabs={tabs} />
      </div>
    </div>
  );
};

export default Header;
