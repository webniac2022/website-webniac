import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import {
  hasCookie,
  setCookie,
  deleteCookie,
  getCookie,
  getCookies,
} from "cookies-next";

const reducer = (state, action) => {
  switch (action.type) {
    case "cookieBanner":
      if (action.payload) {
        return { ...state, showCookieBanner: action.payload };
      } else {
        return { ...state, showCookieBanner: !state.showCookieBanner };
      }
    case "cookieSettingsScreen":
      if (action.payload) {
        return { ...state, showCookieSettingsScreen: action.payload };
      } else {
        return {
          ...state,
          showCookieSettingsScreen: !state.showCookieSettingsScreen,
        };
      }
    case "esentiale":
      return { ...state, esentiale: action.payload };
    case "analitice":
      return { ...state, analitice: action.payload };
    case "promotionale":
      return { ...state, promotionale: action.payload };
    case "tot":
      return { ...state, analitice: true, esentiale: true, promotionale: true };
    case "stergeTot":
      return {
        ...state,
        analitice: false,
        esentiale: false,
        promotionale: false,
      };
  }
};

const CookieContext = createContext();

export const CookieWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    showCookieBanner: !hasCookie("localConsent"),
    showCookieSettingsScreen: false,
    esentiale: hasCookie("localConsent"),
    analitice: hasCookie("_ga"),
    promotionale: false,
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  const acceptaEsentiale = () => {
    const allCookies = getCookies();
    if (Object.keys(allCookies).length === 0) {
      setCookie("localConsent", false, { maxAge: 60 * 60 * 24 * 365 });
    } else {
      Object.keys(allCookies).map((o, i) => {
        deleteCookie(o, {});
      });
      setCookie("localConsent", false, { maxAge: (60 * 60) ^ (24 * 365) });
    }
    dispatch({ type: "cookieBanner", payload: false });
    dispatch({ type: "esentiale", payload: true });
  };

  const acceptaAnalitice = () => {
    setCookie("localConsent", true, { maxAge: 60 * 60 * 24 * 365 });
    if (window !== undefined) {
      gtag("consent", "update", {
        ad_storage: "denied",
        analytics_storage: "granted",
      });
    }
    dispatch({ type: "cookieBanner", payload: false });
    dispatch({ type: "analitice", payload: true });
  };

  const refuzaDoarAnalitice = () => {
    deleteCookie("_ga", {});
    deleteCookie("_ga_5JDY1QTJQV", {});
    if (window !== undefined) {
      gtag("consent", "update", {
        ad_storage: "denied",
        analytics_storage: "denied",
      });
    }
    dispatch({ type: "analitice", payload: false });
  };

  const acceptaTot = () => {
    setCookie("localConsent", true, { maxAge: 60 * 60 * 24 * 365 });
    if (window !== undefined) {
      gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }
    // next cookies here
    dispatch({ type: "cookieBanner", payload: false });
    dispatch({ type: "tot" });
  };

  const stergeTot = () => {
    const allCookies = getCookies();
    if (Object.keys(allCookies).length === 0) return;
    Object.keys(allCookies).map((o, i) => {
      deleteCookie(o, {});
    });
    dispatch({ type: "stergeTot" });
  };

  const value = {
    state,
    dispatch,
    acceptaTot,
    acceptaEsentiale,
    acceptaAnalitice,
    stergeTot,
    refuzaDoarAnalitice,
  };
  return (
    <CookieContext.Provider value={value}>{children}</CookieContext.Provider>
  );
};

export const useCookieContext = () => {
  return useContext(CookieContext);
};
