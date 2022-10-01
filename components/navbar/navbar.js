import Link from "next/link";
import { motion, useRouter } from "../../lib/external-components";

const Navbar = ({ tabs }) => {
  const router = useRouter();
  return (
    <nav className="hidden md:flex gap-4">
      {tabs.map((t, i) => (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ opacity: 0.6 }}
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 100,
            bounce: 20,
          }}
          key={i}
        >
          <Link href={router.pathname !== "/" ? `/#${t.path}` : `#${t.path}`}>
            <h6 className="font-bold text-lg z-10 text-white dark:text-darkContrastText hover:cursor-pointer">
              {t.name}
            </h6>
          </Link>
        </motion.div>
      ))}
    </nav>
  );
};

export default Navbar;
