import { ImageAPIAction } from "./performAPIAction";

// CREATE logo
export const uploadLogo = async (formData) => {
  const url =
    "http://localhost:8000/api/v1/first-website/companies/upload-logo";
  const method = "post";
  return ImageAPIAction(method, url, formData);
};
