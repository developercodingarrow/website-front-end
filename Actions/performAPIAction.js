import axios from "axios";

const performAPIAction = async (method, url, requestData, token = null) => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const config = {
      method,
      url,
      headers,
      data: requestData,
    };

    const response = await axios(config);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default performAPIAction;
