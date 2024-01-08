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

export const getFormFileds = async () => {
  const url = `http://localhost:8000/api/v1/first-website/form-field/get-form-filed`;
  return performGetAPIAction(url);
};

export const addformFiled = async (filedData, slug) => {
  console.log(filedData);
  const url = `http://localhost:8000/api/v1/first-website/form-field/add-form-fileds/${slug}`;
  const method = "patch";
  return performAPIAction(method, url, filedData);
};

export const getSingleFormFileds = async (slug) => {
  const url = `http://localhost:8000/api/v1/first-website/form-field/get-single-form/${slug}`;
  return performGetAPIAction(url);
};
