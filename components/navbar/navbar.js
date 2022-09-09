import React from "react";
import Link from "next/link";

const Navbar = ({ tabs }) => {
  return (
    <nav className="hidden md:flex gap-4">
      {tabs.map((t, i) => (
        <div key={i}>
          <Link href={`${t.path}`}>
            <h6 className="text-xl z-10 text-lightHeading dark:text-darkHeading hover:cursor-pointer">
              {t.name}
            </h6>
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
