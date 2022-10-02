import { motion } from "../../lib/external-components";
import Cookie from "js-cookie";
import { useAppContext } from "../../context/context";

const CookieConsent = () => {
  const { cookieState, toggleCookieDrawer, setCookieState } = useAppContext();
  return (
    <div className="z-[20] w-full fixed bottom-0 left-0 bg-firstGradient">
      <div className="flex flex-wrap">
        <div>
          <p className="text-sm text-white p-2">
            Utilizam cookie-uri pentru a va oferi cea mai buna experienta de
            navigare. Prin continuarea navigarii, va acordati consimtamantul cu
            privire la cookie-urile esentiale.
          </p>
        </div>
        <div className="flex flex-row gap-2 p-2">
          <motion.button
            onClick={() => {}}
            whileHover={{ scale: 0.95 }}
            className="border-2 border-white rounded-xl p-2 text-sm text-green-400"
          >
            Accepta
          </motion.button>
          <motion.button
            onClick={() => {}}
            whileHover={{ scale: 0.95 }}
            className="border-2 border-white rounded-xl p-2 text-sm text-red-400"
          >
            Refuza
          </motion.button>
          <motion.button
            onClick={() => {
              setCookieState({ ...cookieState, showCookieConsent: false });
              toggleCookieDrawer();
            }}
            whileHover={{ scale: 0.95 }}
            className="border-2 border-white rounded-xl p-2 text-sm text-yellow-500"
          >
            Setari cookie
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
