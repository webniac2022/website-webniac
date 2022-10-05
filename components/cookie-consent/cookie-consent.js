import React, { useEffect, useState } from "react";
import { setCookie, hasCookie } from "cookies-next";
import { motion } from "../../lib/external-components";

function CookieConsent() {
  const [consent, setConsent] = useState(true);
  useEffect(() => {
    setConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
    gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });
  };
  const closeP = () => {
    setConsent(true);
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie("localConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
  };
  if (consent === true) {
    return null;
  }
  return (
    <motion.div
      className={`w-full z-20 p-2 fixed flex flex-col gap-1 bottom-0 bg-firstGradient ${
        consent ? "hidden" : ""
      }`}
    >
      <div className="flex flex-row">
        <p className="text-sm text-white">
          Folosim cookies pentru a va oferi o experienta de navigare optima.
        </p>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <motion.button
            className="rounded-lg border-2 border-white p-1 text-sm text-white"
            whileHover={{ scale: 0.95 }}
            transition={{ type: "spring" }}
            onClick={() => closeP()}
          >
            Inchide
          </motion.button>
        </div>
        <div className="flex flex-row gap-5">
          <motion.button
            className="rounded-lg border-2 border-green-400 p-1 text-sm text-white"
            whileHover={{ scale: 0.95 }}
            transition={{ type: "spring" }}
            onClick={() => acceptCookie()}
          >
            Accepta tot
          </motion.button>
          <motion.button
            className="rounded-lg border-2 border-red-500 p-1 text-sm text-white"
            whileHover={{ scale: 0.95 }}
            transition={{ type: "spring" }}
            onClick={() => denyCookie()}
          >
            Refuza tot
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default CookieConsent;
