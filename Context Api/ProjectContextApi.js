import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
export const projectContext = createContext();

export default function ProjectContextApiProvide({ children }) {
  const [projectByCategories, setprojectByCategories] = useState([]);

  return (
    <projectContext.Provider
      value={{ projectByCategories, setprojectByCategories }}
    >
      {children}
    </projectContext.Provider>
  );
}
