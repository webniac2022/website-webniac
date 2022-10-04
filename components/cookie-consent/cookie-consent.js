import { motion } from "../../lib/external-components";
import { MdSettings } from "react-icons/md";
import { useAppContext } from "../../context/context";

const CookieConsent = () => {
  const { cookies, setCookie, dispatch, state } = useAppContext();
  return (
    <div className="z-[20] w-full gap-2 fixed bottom-0 left-0 bg-firstGradient flex flex-col p-2">
      <div>
        <h6 className="text-white text-sm">
          Utilizam cookies pentru a va oferi o experienta de navigare inedita.
        </h6>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-1">
          <motion.button
            onClick={() => dispatch({ type: "refuza" })}
            whileHover={{ scale: 0.95 }}
            className="text-xs text-white bg-black p-1 rounded-lg"
          >
            Refuza
          </motion.button>
          <motion.button
            onClick={() => dispatch({ type: "esentiale", payload: true })}
            whileHover={{ scale: 0.95 }}
            className="text-xs text-white bg-black p-1 rounded-lg"
          >
            Esentiali
          </motion.button>
          <motion.button
            onClick={() => {
              dispatch({ type: "toate" });
            }}
            whileHover={{ scale: 0.95 }}
            className="text-xs text-white bg-black p-1 rounded-lg border-2 border-green-300"
          >
            Accepta tot
          </motion.button>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center">
          <motion.button
            onClick={() =>
              dispatch({ type: "cookieSettingsScreen", payload: true })
            }
            whileHover={{ scale: 0.95 }}
            className="p-1 rounded-lg border-2 border-white flex flex-row items-center justify-center gap-2 text-white text-xs bg-black"
          >
            <MdSettings className="w-[15px] h-[15px] fill-white" />
            Setari cookie
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
