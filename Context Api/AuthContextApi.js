import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
export const AuthContext = createContext();
import { createNewUser, verifyOtp } from "../Actions/authAction";

export default function AuthContextApiProvider({ children }) {
  const handelCreateNewUser = async (data) => {
    try {
      const response = await createNewUser(data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handelverifyOtp = async (data) => {
    try {
      const response = await verifyOtp(data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{ handelCreateNewUser, handelverifyOtp }}>
      {children}
    </AuthContext.Provider>
  );
}
