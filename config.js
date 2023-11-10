import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION
  ? "http://firstwebsite.in/"
  : "http://localhost:8000/";

export const App_Name = publicRuntimeConfig.App_Name;
