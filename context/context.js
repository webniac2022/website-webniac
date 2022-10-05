import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";

const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
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

export function AppWrapper({ children }) {
  const [showFab, setShowFab] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    showCookieSettingsScreen: false,
  });

  const [tabs, setTabs] = useState([
    { name: "Acasa", path: "", id: "acasa" },
    { name: "Despre", path: "despre", id: "despre" },
    { name: "Servicii", path: "servicii", id: "servicii" },
    { name: "Contact", path: "contact", id: "contact" },
  ]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const toggleDrawer = () => setShowDrawer(!showDrawer);

  const values = {
    tabs,
    showFab,
    setShowFab,
    showDrawer,
    toggleDrawer,
    state,
    dispatch,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
