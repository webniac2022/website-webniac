import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { useCookies } from "react-cookie";

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
    case "esentiale":
      if (action.payload) {
        return {
          ...state,
          esentiale: { ...state.esentiale, shouldSet: action.payload },
          analitice: { ...state.analitice, shouldSet: false },
          promovare: { ...state.promovare, shouldSet: false },
        };
      } else {
        return {
          ...state,
          esentiale: {
            ...state.esentiale,
            shouldSet: !state.esentiale.shouldSet,
          },
          analitice: { ...state.analitice, shouldSet: false },
          promovare: { ...state.promovare, shouldSet: false },
        };
      }
    case "analitice":
      if (action.payload) {
        return {
          ...state,
          analitice: { ...state.analitice, shouldSet: action.payload },
        };
      } else {
        return {
          ...state,
          analitice: {
            ...state.analitice,
            shouldSet: !state.analitice.shouldSet,
          },
        };
      }
    case "promovare":
      if (action.payload) {
        return {
          ...state,
          promovare: { ...state.promovare, shouldSet: action.payload },
        };
      } else {
        return {
          ...state,
          promovare: {
            ...state.promovare,
            shouldSet: !state.promovare.shouldSet,
          },
        };
      }
    case "toate":
      return {
        ...state,
        analitice: { ...state.analitice, shouldSet: true },
        esentiale: { ...state.esentiale, shouldSet: true },
        promovare: { ...state.promovare, shouldSet: true },
      };
    case "refuza":
      return {
        ...state,
        esentiale: { ...state.esentiale, shouldSet: false },
        analitice: { ...state.analitice, shouldSet: false },
        promovare: { ...state.promovare, shouldSet: false },
      };
  }
};

export function AppWrapper({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(["web_cook"]);
  const [showFab, setShowFab] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    showCookieSettingsScreen: false,

    esentiale: {
      shouldSet: false,
      cookies: [
        {
          name: "web_cook",
          value: true,
          path: "/",
          secure: true,
          sameSite: "lax",
          maxAge: 12 * 12 * 60 * 1000,
        },
      ],
    },
    analitice: { shouldSet: false, cookies: [] },
    promovare: { shouldSet: false, cookies: [] },
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
    cookies,
    setCookie,
    removeCookie,
    state,
    dispatch,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
