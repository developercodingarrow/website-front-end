import { ImageAPIAction } from "./performAPIAction";

// CREATE logo
export const uploadLogo = async (formData) => {
  const url =
    "http://localhost:8000/api/v1/first-website/companies/upload-logo";
  const method = "post";
  return ImageAPIAction(method, url, formData);
};

export const uploadGallery = async (formData, ) => {
  console.log("run gallery action");
  const url =
    "http://localhost:8000/api/v1/first-website/companies/upload-gallery/6584058de8a345aa157d21f2";
  const method = "post";
  return ImageAPIAction(method, url, formData);
};
