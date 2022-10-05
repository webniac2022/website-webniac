import { useState, useEffect } from "react";
import { setCookie, hasCookie, deleteCookie } from "cookies-next";

const useCookies = () => {
  const [consent, setConsent] = useState(true);
  const [cookieState, setCookieState] = useState({
    esentiale: true,
    analitice: false,
    promotionale: false,
  });

  useEffect(() => {
    setConsent(hasCookie("localConsent"));
  }, []);

  const acceptEsentialCookies = () => {
    setConsent(true);
    setCookie("localConsent", "e", { maxAge: 60 * 60 * 24 * 365 });
    if (window !== undefined) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  const acceptAllCookies = () => {
    setConsent(true);
    setCookie("localConsent", "all", { maxAge: 60 * 60 * 24 * 365 });
    gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });
    setCookieState({ ...cookieState, analitice: true, promotionale: true });
  };

  const denyCookie = () => {
    setConsent(true);
    setCookie("localConsent", "no", { maxAge: 60 * 60 * 24 * 365 });
  };

  const denyAnalythics = () => {
    deleteCookie("_ga_5JDY1QTJQV", {});
    deleteCookie("_ga", {});
    gtag("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "denied",
    });
    setCookieState({ ...cookieState, analitice: false });
  };

  const acceptAnalythics = () => {
    gtag("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "granted",
    });
    setCookieState({ ...cookieState, analitice: true });
  };

  return [
    consent,
    acceptEsentialCookies,
    acceptAllCookies,
    denyCookie,
    denyAnalythics,
    cookieState,
  ];
};

export default useCookies;
