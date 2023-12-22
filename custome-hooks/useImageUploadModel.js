import { useState } from "react";
import { imgesDetailsFileds } from "../JsonData/imageUploadsFileds";

export function useImageUploadModel(filedName = "") {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [imageInfo, setimageInfo] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formDataArray, setFormDataArray] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handelImageSelect = (files) => {
    if (files.length === 0) {
      return;
    }

    const file = files[0];

    if (!file.type.startsWith("image/")) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedImages([...uploadedImages, event.target.result]);
      setimageInfo([...imageInfo, {}]);
    };
    reader.readAsDataURL(file);
    const newFormData = createFormData();
    setFormDataArray([...formDataArray, newFormData]);
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

  return {
    uploadedImages,
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
