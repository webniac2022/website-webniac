import { useAppContext } from "../../context/context";
import { motion, AiOutlineClose } from "../../lib/external-components";
import { RiAdvertisementLine } from "react-icons/ri";
import { MdAnalytics } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import SwitchButton from "../switch-button/switch-button";
import Cookies from "js-cookie";

function CookieDrawer() {
  const { toggleCookieDrawer, cookieState, setCookieState } = useAppContext();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { type: "spring", duration: 1 },
      }}
      className="z-[100] fixed top-0 left-0 w-full h-full bg-fifthGradient dark:bg-secondGradient overflow-auto"
    >
      <div className="flex flex-row justify-end">
        <AiOutlineClose
          onClick={toggleCookieDrawer}
          className="mt-[5vh] mr-[10vw] fill-white dark:fill-darkContrastText hover:cursor-pointer"
          size={30}
        />
      </div>
      <div className="mt-10 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-center font-bold text-3xl sm:text-5xl text-white dark:text-black">
            Setari cookies
          </h2>
          <p className="p-3 text-left text-sm sm:text-2xl text-white dark:text-black">
            Mai jos regasiti setarile legate de fisierele cookie utilizate de
            catre website-ul nostru.
            <br />
            Va rugam sa personalizati setarile cookie cu privire la acest
            website in functie de preferintele dumneavoastra:
          </p>
        </div>

        <div className="flex flex-wrap gap-2 p-2 justify-around">
          <div className="flex flex-col gap-2 items-center">
            <div className="flex flex-row justify-center">
              <h6 className="text-center text-white dark:text-black">
                Esential
              </h6>
            </div>
            <AiFillSetting className="w-[50px] h-[50px] fill-white dark:fill-black" />
            <SwitchButton
              isOpen={cookieState.esentiale.isAccepted}
              toggleSwitch={() => null}
            />
          </div>

          <div className="flex flex-col gap-2 items-center">
            <div className="flex flex-row justify-center">
              <h6 className="text-center text-white dark:text-black">
                Analitic
              </h6>
            </div>
            <MdAnalytics className="w-[50px] h-[50px] fill-white dark:fill-black" />
            <SwitchButton
              isOpen={cookieState.analitice.isAccepted}
              toggleSwitch={() =>
                setCookieState({
                  ...cookieState,
                  analitice: {
                    ...cookieState.analitice,
                    isAccepted: !cookieState.analitice.isAccepted,
                  },
                })
              }
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex flex-row justify-center">
              <h6 className="text-center text-white dark:text-black">
                Reclame
              </h6>
            </div>
            <RiAdvertisementLine className="w-[50px] h-[50px] fill-white dark:fill-black" />
            <SwitchButton
              isOpen={cookieState.reclame.isAccepted}
              toggleSwitch={() =>
                setCookieState({
                  ...cookieState,
                  reclame: {
                    ...cookieState.reclame,
                    isAccepted: !cookieState.reclame.isAccepted,
                  },
                })
              }
            />
          </div>
        </div>

        <div>
          <h6 className="p-3 text-xl sm:text-2xl text-white dark:text-black">
            Informatii relevante despre fisierele cookie:
          </h6>
          <p className="p-3 text-sm sm:text-xl text-white dark:text-black">
            Cookie-urile sunt fisiere de de mici dimensiuni pe care un website
            le seteaza in browserul dumneavoastra. Setarea acestora poate avea
            ca scop facilitarea navigarii website-ului, de a face website-ul
            mult mai relevant pentru dumneavoastra, pastrarea anumitor
            preferinte de utilizator precum tara din care accesati website-ul,
            tema preferata, informatii legate de sesiune etc.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default CookieDrawer;
