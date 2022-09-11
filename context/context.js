import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [tabs, setTabs] = useState([
    { name: "Acasa", path: "/", id: "acasa" },
    { name: "Despre", path: "/despre", id: "despre" },
    { name: "Servicii", path: "/servicii", id: "servicii" },
    { name: "Contact", path: "/contact", id: "contact" },
  ]);
  const values = { tabs };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
