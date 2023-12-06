import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
export const TestContext = createContext();
import { getDataListAction, toggleAction } from "../Actions/testAction";

export default function TestContextAppiProvide({ children }) {
  const [dataList, setdataList] = useState([]);

  const handelGetData = async () => {
    try {
      const response = await getDataListAction();
      setdataList(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handelAction = async (data) => {
    try {
      const response = await toggleAction(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TestContext.Provider value={{ handelGetData, dataList, handelAction }}>
      {children}
    </TestContext.Provider>
  );
}
