import { useAppContext } from "../../context/context";
import { motion, AiOutlineClose } from "../../lib/external-components";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdSettings } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import SwitchButton from "../switch-button/switch-button";
import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";

const CookieSettings = () => {
  const { cookieState, setCookieState } = useAppContext();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", damping: 15, duration: 0.4 }}
      className="p-2 z-[100] fixed left-0 top-0 w-full h-full bg-fifthGradient dark:bg-secondGradient overflow-auto"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-row justify-end">
          <AiOutlineClose
            onClick={() =>
              setCookieState({
                ...cookieState,
                showAditionalSettingScreen:
                  !cookieState.showAditionalSettingScreen,
              })
            }
            className="mt-[5vh] mr-[5vw] fill-white dark:fill-darkContrastText hover:cursor-pointer"
            size={30}
          />
        </div>
        <div className="mt-10">
          <h2 className="text-center p-2 text-3xl sm:text-7xl text-white dark:text-black">
            Setari cookie
          </h2>
        </div>
        <div className="">
          <p className="text-white dark:text-black text-sm sm:text-lg p-2">
            Va rugam sa selectati optiunile dumneavoastra cu privire la setarea
            fisierelor de tip cookie, dupa cum urmeaza:
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <div>
              <motion.button
                onClick={() =>
                  setCookieState({
                    ...cookieState,
                    esentiale: { isAccepted: true },
                    analitice: { isAccepted: true },
                    reclame: { isAccepted: true },
                    userDenied: false,
                    userAccepted: true,
                    showAditionalSettingScreen: true,
                  })
                }
                whileHover={{ scale: 0.95 }}
                transition={{ type: "spring" }}
                className="p-2 rounded-lg bg-yellow-300 text-black"
              >
                Bifeaza tot
              </motion.button>
            </div>
          </div>

          <div>
            <motion.button
              onClick={() => {
                // Set cookies!
              }}
              whileHover={{ scale: 0.95 }}
              transition={{ type: "spring" }}
              className="p-2 bg-green-300 rounded-lg flex flex-row items-center gap-2 text-black"
            >
              <AiOutlineCheck className="fill-black dark:fill-black w-[20px] h-[20px]" />
              Salveaza
            </motion.button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="flex flex-col gap-2 items-center justify-around rounded-lg bg-firstGradient p-2">
            <div>
              <h2 className="text-3xl font-bold text-white dark:text-black">
                Esentiale
              </h2>
            </div>

            <div>
              <MdSettings className="w-[50px] h-[50px] fill-white dark:fill-black" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm text-white dark:text-black">
                Setam urmatorul first-party cookie: <br /> web_cook - reprezinta
                consimtamantul utilizatorilor cu privire la Politica cookies
                (este setat pe o perioada de 8 luni)
              </p>
            </div>
            <div>
              <SwitchButton
                isOpen={cookieState.esentiale.isAccepted}
                toggleSwitch={() =>
                  setCookieState({
                    ...cookieState,
                    esentiale: {
                      ...cookieState.esentiale,
                      isAccepted: !cookieState.esentiale.isAccepted,
                    },
                    userAccepted: !cookieState.userAccepted,
                    showCookieConsent: !cookieState.showCookieConsent,
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-around rounded-lg bg-firstGradient p-2">
            <div>
              <h2 className="text-3xl font-bold text-white dark:text-black">
                Analitice
              </h2>
            </div>
            <div>
              <IoMdAnalytics className="w-[50px] h-[50px] fill-white dark:fill-black" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm text-white dark:text-black">
                Se seteaza urmatoarele cookie-uri:
                <br />2 cookie-uri de tipul _ga setate de Google Analythics -
                sunt valabile 12 luni.
              </p>
            </div>
            <div>
              <SwitchButton
                isOpen={cookieState.analitice.isAccepted}
                toggleSwitch={() =>
                  setCookieState({
                    ...cookieState,
                    analitice: {
                      ...cookieState.analitice,
                      isAccepted: !cookieState.analitice.isAccepted,
                    },
                    userAccepted: !cookieState.userAccepted,
                    showCookieConsent: !cookieState.showCookieConsent,
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-around rounded-lg bg-firstGradient p-2">
            <div>
              <h2 className="text-3xl font-bold text-white dark:text-black">
                Promovare
              </h2>
            </div>

            <div>
              <RiAdvertisementFill className="w-[50px] h-[50px] fill-white dark:fill-black" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm text-white dark:text-black">
                Momentan, nu setam cookie-uri de acest gen.
              </p>
            </div>
            <div>
              <SwitchButton
                isOpen={cookieState.reclame.isAccepted}
                toggleSwitch={() =>
                  setCookieState({
                    ...cookieState,
                    reclame: {
                      ...cookieState.reclame,
                      isAccepted: !cookieState.reclame.isAccepted,
                    },
                    userAccepted: !cookieState.userAccepted,
                    showCookieConsent: !cookieState.showCookieConsent,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <p className="p-2 text-4xl text-white dark:text-black">
            Informatii suplimentare
          </p>
        </div>
        <div className="flex flex-row">
          <p className="p-2 text-sm text-white dark:text-black">
            Fisierele cookie sunt fisiere text de mici dimensiuni pe care
            website-urile sau tertii le pot seta in browser-ul utilizatorilor
            pentru a servi diverse scopuri. Acestea pot fi fisiere cookie
            esentiale menite sa pastreze informatii precum preferintele
            utilizatorilor, tema, limba, regiunea sau continutului unui cos de
            cumparaturi in cazul magazinelor online. Fisierele cookie esentiale
            sunt strict legate de functionalitatea aplicatiei sau de navigarea
            optima a acestuia.
          </p>
        </div>
        <div className="flex flex-row">
          <p className="p-2 text-sm text-white dark:text-black">
            Fisierele cookie setate de terti sunt optionale si necesita acordul
            utilizatorilor. Acestea pot fi setate de tool-uri precum Google
            Analythics in vederea monitorizarii traficului unei aplicatii,
            preferintelor utilizatorilor, comportamente si multe altele. Fisiere
            de tip cookie sunt setate si pentru targetarea utilizatorilor cu
            materiale promotionale.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieSettings;
