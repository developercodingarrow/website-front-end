import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
export const AppContext = createContext();

export default function AppContextApiProvider({ children }) {
  const [drawerToggle, setdrawerToggle] = useState(false);
  const appDrawerRef = useRef();

  const handleClickOutside = (event) => {
    if (appDrawerRef.current && !appDrawerRef.current.contains(event.target)) {
      setdrawerToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handelAppDrawer = () => {
    setdrawerToggle(!drawerToggle);
  };

  return (
    <AppContext.Provider
      value={{ drawerToggle, setdrawerToggle, handelAppDrawer, appDrawerRef }}
    >
      {children}
    </AppContext.Provider>
  );
}
