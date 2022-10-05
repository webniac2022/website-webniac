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
  }
};

const CookieContext = createContext();

export const CookieWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    showCookieBanner: !hasCookie("localConsent"),
    showCookieSettingsScreen: false,
    accepted: false,
    analitice: false,
    promotionale: false,
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  const refuzaTot = () => {
    const allCookies = getCookies();
    if (Object.keys(allCookies).length === 0) {
      setCookie("localConsent", false, { maxAge: 60 * 60 * 24 * 365 });
    } else {
      Object.keys(allCookies).map((o, i) => {
        deleteCookie(o, {});
      });
      setCookie("localConsent", false, { maxAge: (60 * 60) ^ (24 * 365) });
    }
  };

  const acceptaEsentiale = () => {
    refuzaTot();
  };

  const acceptaTot = () => {
    setCookie("localConsent", true, { maxAge: 60 * 60 * 24 * 365 });
    if (window !== undefined) {
      gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }
  };

  const value = {
    state,
    dispatch,
    acceptaTot,
    acceptaEsentiale,
    refuzaTot,
  };
  return (
    <CookieContext.Provider value={value}>{children}</CookieContext.Provider>
  );
};

export const useCookieContext = () => {
  return useContext(CookieContext);
};
