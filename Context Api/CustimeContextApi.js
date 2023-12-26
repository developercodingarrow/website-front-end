import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

export const CustomeContext = createContext();

export default function CustimeContextProvider({ children }) {
  const [dataBaseImages, setdataBaseImages] = useState([]);
  const [loading, setloading] = useState(false);
  return (
    <CustomeContext.Provider
      value={{ dataBaseImages, setdataBaseImages, loading, setloading }}
    >
      {children}
    </CustomeContext.Provider>
  );
}
