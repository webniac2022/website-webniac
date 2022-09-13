import React from "react";
import Link from "next/link";
import { motion } from "../../lib/external-components";

const Navbar = ({ tabs }) => {
  return (
    <nav className="hidden md:flex gap-4">
      {tabs.map((t, i) => (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 100,
            bounce: 20,
          }}
          key={i}
        >
          <Link href={`${i !== 0 ? "#" : ""}${t.path}`}>
            <h6 className="font-bold text-xl z-10 text-lightContrastText dark:text-darkHeading hover:cursor-pointer">
              {t.name}
            </h6>
          </Link>
        </motion.div>
      ))}
    </nav>
  );
};

export default Navbar;
