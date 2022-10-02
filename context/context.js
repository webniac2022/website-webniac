import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [showFab, setShowFab] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showCookie, setShowCookie] = useState(false);
  const [cookieState, setCookieState] = useState({
    showCookieConsent: true,
    esentiale: { isAccepted: true },
    analitice: { isAccepted: false },
    reclame: { isAccepted: false },
  });

  const [tabs, setTabs] = useState([
    { name: "Acasa", path: "", id: "acasa" },
    { name: "Despre", path: "despre", id: "despre" },
    { name: "Servicii", path: "servicii", id: "servicii" },
    { name: "Contact", path: "contact", id: "contact" },
  ]);

  const toggleDrawer = () => setShowDrawer(!showDrawer);
  const toggleCookieDrawer = () => setShowCookie(!showCookie);

  const values = {
    tabs,
    showFab,
    setShowFab,
    showDrawer,
    toggleDrawer,
    showCookie,
    toggleCookieDrawer,
    cookieState,
    setCookieState,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
