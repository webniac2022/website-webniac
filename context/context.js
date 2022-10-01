import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [showFab, setShowFab] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  const [showGDPR, setShowGDPR] = useState(false);

  const [tabs, setTabs] = useState([
    { name: "Acasa", path: "", id: "acasa" },
    { name: "Despre", path: "despre", id: "despre" },
    { name: "Servicii", path: "servicii", id: "servicii" },
    { name: "Contact", path: "contact", id: "contact" },
  ]);

  const toggleDrawer = () => setShowDrawer(!showDrawer);
  const toggleCookies = () => setShowCookies(!showCookies);
  const toggleGDPR = () => setShowGDPR(!showGDPR);

  const values = {
    tabs,
    showFab,
    setShowFab,
    showDrawer,
    toggleDrawer,
    showCookies,
    toggleCookies,
    showGDPR,
    toggleGDPR,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
