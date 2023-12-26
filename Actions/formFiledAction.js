import {
  ImageAPIAction,
  performAPIAction,
  performGetAPIAction,
} from "./performAPIAction";

export const craeteNewForm = async (filedData) => {
  console.log(filedData);
  const url = `http://localhost:8000/api/v1/first-website/form-field/create-new-form`;
  const method = "post";
  return performAPIAction(method, url, filedData);
};
