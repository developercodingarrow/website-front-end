import {
  ImageAPIAction,
  performAPIAction,
  performGetAPIAction,
} from "./performAPIAction";

// CREATE logo
export const uploadLogo = async (formData) => {
  const url =
    "http://localhost:8000/api/v1/first-website/companies/upload-logo";
  const method = "post";
  return ImageAPIAction(method, url, formData);
};

export const uploadGallery = async (formData) => {
  console.log("run gallery action");
  const url =
    "http://localhost:8000/api/v1/first-website/companies/upload-gallery/6584058de8a345aa157d21f2";
  const method = "post";
  return ImageAPIAction(method, url, formData);
};

export const getlogos = async () => {
  const url =
    "http://localhost:8000/api/v1/first-website/companies/get-all-logo";
  const method = "get";
  return performGetAPIAction(method, url);
};

export const getSingleLogo = async (_id) => {
  console.log(_id);
  const url = `http://localhost:8000/api/v1/first-website/companies/get-single-logo/${_id}`;
  return performGetAPIAction(url);
};

export const deleteGalleryImage = async (_id, imageId) => {
  console.log(_id);
  console.log(imageId);
  const url = `http://localhost:8000/api/v1/first-website/companies/delete-gallery-image/${_id}`;
  const method = "delete";
  return performAPIAction(method, url, imageId);
};
