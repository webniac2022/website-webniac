import { useAppContext } from "../../context/context";
import Link from "next/link";
import { motion, useRouter } from "../../lib/external-components";
import { AiOutlineClose } from "react-icons/ai";

const Drawer = () => {
  const router = useRouter();
  console.log(router.pathname);
  const { tabs, toggleDrawer } = useAppContext();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, width: "0%", height: "0%" }}
      animate={{ opacity: 1, width: "100%", height: "100%" }}
      transition={{
        duration: 0.5,
        type: "spring",
        bounce: 1,
        stiffness: 100,
      }}
      className="top-0 left-0 fixed w-0 h-0 bg-lightBg dark:bg-darkBg z-30 overflow-hidden"
    >
      <div className="flex flex-row justify-end">
        <AiOutlineClose
          onClick={toggleDrawer}
          className="mt-[5vh] mr-[10vw] fill-white dark:fill-darkContrastText hover:cursor-pointer"
          size={30}
        />
      </div>
      <ul className="flex flex-col items-center justify-center mt-[20vh] gap-5">
        {tabs.map((t, i) => (
          <li key={i}>
            <Link
              href={router.pathname !== "/" ? `/#${t.path}` : `#${t.path}`}
              className=""
            >
              <motion.h2
                className="hover:cursor-pointer text-xl font-bold text-white dark:text-darkContrastText"
                onClick={toggleDrawer}
                whileHover={{ opacity: 0.6 }}
              >
                {t.name}
              </motion.h2>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Drawer;
