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

export const handelUplaodGallery = async (
  imageDataArray,
  imageDetails,
  imageFor
) => {
  try {
    console.log(imageDetails);
    const formData = new FormData();

    imageDataArray.forEach((imageData, index) => {
      formData.append(`${imageFor}`, imageData);
    });
    // Assuming imageDetails is an object with key-value pairs
    for (const key in imageDetails) {
      if (Object.hasOwnProperty.call(imageDetails, key)) {
        formData.append(key, imageDetails[key]);
      }
    }
    const result = await uploadGallery(formData);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
