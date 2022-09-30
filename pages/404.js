import { Image, motion } from "../lib/external-components";
import bgErr from "../public/images/err.svg";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Image src={bgErr} alt="Custom error image" style={{ opacity: 0.6 }} />
      <div className="absolute flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-5xl text-center font-bold text-red-500 p-5">
          OOOPS......Ceva nu a functionat!
        </h2>
        <Link href="/">
          <motion.button
            whileHover={{ scale: 0.95, opacity: 0.8 }}
            className="font-bold text-white text-xl border-2 border-red-500 rounded p-2"
          >
            Inapoi
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
