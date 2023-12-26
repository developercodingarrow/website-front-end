// This dataByIdHandler for those function those fetch data By id
export const genericdataByIdHandler = (getImageFunction) => {
  return async (id) => {
    try {
      const result = await getImageFunction(id);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};

// This Function for Uplaod image gallery
export const genericUploadImageHandler = (uploadFunction) => {
  return async (imageDataArray, imageDetails, imageFor, id = null) => {
    try {
      const formData = new FormData();

      imageDataArray.forEach((imageData, index) => {
        formData.append(`${imageFor}`, imageData);
      });

      for (const key in imageDetails) {
        if (Object.hasOwnProperty.call(imageDetails, key)) {
          formData.append(key, imageDetails[key]);
        }
      }

      const result = id
        ? await uploadFunction(formData, id)
        : await uploadFunction(formData);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
};

// This dataByIdHandler for those function those fetch data By id
export const generichalderforIdData = (getImageFunction) => {
  return async (id, imageId) => {
    try {
      const data = {
        imageId: imageId,
      };
      const result = await getImageFunction(id, data);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};
