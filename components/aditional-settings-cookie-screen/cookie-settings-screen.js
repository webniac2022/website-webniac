import { motion, AiOutlineClose } from "../../lib/external-components";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdSettings } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import SwitchButton from "../switch-button/switch-button";
import { useAppContext } from "../../context/context";
import { useState } from "react";
import { hasCookie, deleteCookie } from "cookies-next";
import { useCookieContext } from "../../context/cookie-context";

const CookieSettings = () => {
  const { dispatch, state, deleteAnaliticCookies } = useCookieContext();

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
              dispatch({ type: "cookieSettingsScreen", payload: false })
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
        <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-row items-center gap-2">
            <div>
              <motion.button
                whileHover={{ scale: 0.95 }}
                transition={{ type: "spring" }}
                className="p-2 rounded-lg bg-yellow-300 text-black"
              >
                Selecteaza tot
              </motion.button>
            </div>
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
            <div className="flex flex-col">
              <p className="text-sm text-white dark:text-black">
                Setam urmatorul first-party cookie: <br /> local-consent cu o
                valabilitiate de 12 luni in vederea gestionarii afisarii sau
                neafisarii cookie banner-ului.
              </p>
            </div>
            <div>
              <SwitchButton
                isOpen={false}
                toggleSwitch={() => null}
                opacity={40}
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
            <div className="flex flex-col">
              <p className="text-sm text-white dark:text-black">
                Se seteaza urmatoarele cookie-uri:
                <br />2 cookie-uri de tipul _ga setate de Google Analythics -
                sunt valabile 12 luni, acestea se seteaza pentru a colecta date
                cu privire la utilizarea website-ului si comportamente ale
                utilizatorilor din timpul navigarii acestuia.
              </p>
            </div>
            <div>
              <SwitchButton
                isOpen={false}
                toggleSwitch={() => null}
                opacity={100}
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
            <div className="flex flex-col">
              <p className="text-sm text-white dark:text-black">
                Momentan, nu setam cookie-uri de acest gen.
              </p>
            </div>
            <div>
              <SwitchButton
                isOpen={false}
                toggleSwitch={() => null}
                opacity={100}
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
        <div className="flex flex-row">
          <p className="p-2 text-sm text-white dark:text-black">
            Puteti oricand sa vizualizati si sa stereti cookie-urile setate din
            Optiunile de Confidentialitate ale browser-ului dumneavoastra.
            Stergerea tuturor fisierelor cookie poate avea ca rezultat probleme
            de functionalitate ale website-ului.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieSettings;
