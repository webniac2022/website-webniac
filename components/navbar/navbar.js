import React from "react";
import Link from "next/link";

const Navbar = ({ tabs }) => {
  return (
    <nav className="hidden md:flex gap-4">
      {tabs.map((t, i) => (
        <div key={i}>
          <Link href={`${i !== 0 ? "#" : ""}${t.path}`}>
            <h6 className="font-bold text-xl z-10 text-lightContrastText dark:text-darkHeading hover:cursor-pointer">
              {t.name}
            </h6>
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
