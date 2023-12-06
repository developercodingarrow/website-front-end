import axios from "axios";

// GET ALL BLOG ACTION
export const getDataListAction = async () => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/v1/first-website/test/get-data`,

      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    // console.log(error.response);
    return error.response;
  }
};

export const toggleAction = async (requestData) => {
  console.log(requestData);
  try {
    const res = await axios.patch(
      `http://127.0.0.1:8000/api/v1/first-website/test/toggle-active`,
      requestData,
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    // console.log(error.response);
    return error.response;
  }
};
