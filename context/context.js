import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [showFab, setShowFab] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [cookieState, setCookieState] = useState({
    esentiale: { isAccepted: false },
    analitice: { isAccepted: false },
    reclame: { isAccepted: false },
    userDenied: false,
    userAccepted: false,
    showAditionalSettingScreen: false,
    showCookieConsent: true,
  });

  useEffect(() => {
    console.log(cookieState);
  }, [cookieState]);

  const showCookieConsent = () => {
    if (cookieState.userDenied || cookieState.userAccepted) {
      return false;
    }
    return true;
  };

  const [tabs, setTabs] = useState([
    { name: "Acasa", path: "", id: "acasa" },
    { name: "Despre", path: "despre", id: "despre" },
    { name: "Servicii", path: "servicii", id: "servicii" },
    { name: "Contact", path: "contact", id: "contact" },
  ]);

  const toggleDrawer = () => setShowDrawer(!showDrawer);

  const values = {
    tabs,
    showFab,
    setShowFab,
    showDrawer,
    toggleDrawer,
    cookieState,
    showCookieConsent,
    setCookieState,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
