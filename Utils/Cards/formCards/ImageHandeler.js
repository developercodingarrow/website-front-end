import { uploadLogo } from "../../../Actions/companyAction";

export const handelUplaodLogo = async (imageDta, id) => {
  try {
    const formData = new FormData();
    formData.append("logo", imageDta);
    const result = await uploadLogo(formData);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
