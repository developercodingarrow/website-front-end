import performAPIAction from "./performAPIAction";

// CREATE NEW USER
export const createNewUser = async (requestData) => {
  const url = "http://localhost:8000/api/v1/first-website/user/sing-up";
  const method = "post";
  return performAPIAction(method, url, requestData);
};

export const verifyOtp = async (requestData, token) => {
  const url = `http://localhost:8000/api/v1/first-website/user//verify-otp/${token}`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};
