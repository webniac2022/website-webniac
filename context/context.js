import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [showFab, setShowFab] = useState(false);
  const [tabs, setTabs] = useState([
    { name: "Acasa", path: "", id: "acasa" },
    { name: "Despre", path: "despre", id: "despre" },
    { name: "Servicii", path: "servicii", id: "servicii" },
    { name: "Contact", path: "contact", id: "contact" },
  ]);

  const values = { tabs, showFab, setShowFab };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
