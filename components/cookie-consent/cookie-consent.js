import React, { useEffect, useState } from "react";
import { motion } from "../../lib/external-components";
import { MdSettings } from "react-icons/md";
import { useAppContext } from "../../context/context";
import { useCookieContext } from "../../context/cookie-context";

function CookieConsent() {
  const { dispatch, state, acceptaTot, acceptaEsentiale } = useCookieContext();

  return (
    <div
      className={`w-[90vw] left-[50%] [transform:translateX(-50%)] rounded-xl z-20 p-2 fixed flex flex-col bottom-5 gap-1 bg-fourthGradient`}
    >
      <div className="flex flex-row">
        <p className="text-xs text-white">
          Folosim cookies pentru a va oferi o experienta de navigare optima.
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <motion.button
          onClick={() =>
            dispatch({ type: "cookieSettingsScreen", payload: true })
          }
          whileHover={{ scale: 0.95 }}
          transition={{ type: "spring" }}
          className="text-xs text-white flex flex-row items-center gap-2 border-2 border-white rounded-lg p-1"
        >
          <MdSettings />
          Setari cookies
        </motion.button>
        <motion.button
          onClick={() => acceptaEsentiale()}
          className="rounded-lg border-2 border-white p-1 text-xs text-white"
          whileHover={{ scale: 0.95 }}
          transition={{ type: "spring" }}
        >
          Esentiale
        </motion.button>
        <motion.button
          onClick={() => acceptaTot()}
          className="rounded-lg border-2 border-green-400 p-1 text-xs text-white"
          whileHover={{ scale: 0.95 }}
          transition={{ type: "spring" }}
        >
          Accepta tot
        </motion.button>
      </div>
      <div className="flex flex-row gap-2"></div>
      <div className="flex flex-row justify-start"></div>
    </div>
  );
}

export default CookieConsent;
