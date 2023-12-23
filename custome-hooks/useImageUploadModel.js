import { useState } from "react";
import { imgesDetailsFileds } from "../JsonData/imageUploadsFileds";

export function useImageUploadModel(filedName = "", numberOfImages) {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [imagePrivew, setimagePrivew] = useState([]);
  const [imageInfo, setimageInfo] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formDataArray, setFormDataArray] = useState([]);
  const infoNameFiled = imgesDetailsFileds.map((field) => field.name);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handelImageSelect = (e) => {
    const selectedImages = Array.from(e.target.files);
    if (selectedImages.length + uploadedImages.length > numberOfImages) {
      alert(`You can upload maximum ${numberOfImages} images.`);
      return;
    }
    setUploadedImages([...uploadedImages, ...selectedImages]);

    const previews = selectedImages.map((image) => URL.createObjectURL(image));
    setimagePrivew([...imagePrivew, ...previews]);
  };

  const removeImage = (index) => {
    const updatedImages = [...uploadedImages];
    updatedImages.splice(index, 1);
    setUploadedImages(updatedImages);

    const updatedDetails = [...imageInfo];
    updatedDetails.splice(index, 1);
    setimageInfo(updatedDetails);
    const newFormData = createFormData();
    setFormDataArray([...formDataArray, newFormData]);
  };

  const updateImageDetails = (index, fieldName, value) => {
    const updatedDetails = [...imageInfo];
    updatedDetails[index] = { ...updatedDetails[index], [fieldName]: value };
    setimageInfo(updatedDetails);

    const newFormData = createFormData();
    setFormDataArray([...formDataArray, newFormData]);
  };

  const createFormData = () => {
    const formDataArray = [];

    for (let i = 0; i < uploadedImages.length; i++) {
      const formData = new FormData();
      formData.append(filedName, uploadedImages[i]);

      for (const detail of imageInfo[i]) {
        formData.append(detail.name, detail.value);
      }

      formDataArray.push(formData);
    }

    return formDataArray;
  };

  console.log(uploadedImages);
  console.log(imageInfo);
  console.log(formDataArray);
  return {
    uploadedImages,
    imagePrivew,
    imageInfo,
    handelImageSelect,
    removeImage,
    updateImageDetails,
    isModalOpen,
    openModal,
    closeModal,
    formDataArray,
  };
}

// const handelImageSelect = (files) => {
//   // If there is no file select then exit the funtion
//   if (files.length === 0 || !files[0].type.startsWith("image/")) {
//     return;
//   }
//   const reader = new FileReader();
//   reader.onload = (event) => {
//     setUploadedImages([...uploadedImages, event.target.result]);
//     setimageInfo([...imageInfo, ...infoNameFiled]);
//   };
//   reader.readAsDataURL(files[0]);
//   const newFormData = createFormData();
//   setFormDataArray([...formDataArray, newFormData]);
// };
