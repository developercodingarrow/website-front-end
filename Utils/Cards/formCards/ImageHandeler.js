import { uploadLogo, uploadGallery } from "../../../Actions/companyAction";

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

export const handelUplaodGallery = async (imageDataArray, imageFor) => {
  try {
    const formData = new FormData();

    imageDataArray.forEach((imageData, index) => {
      // const { image } = imageData;
      formData.append(`${imageFor}`, imageData);
    });
    formData.append(`altText`, "this-is from website");
    const result = await uploadGallery(formData);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
