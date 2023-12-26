import { useState } from "react";
import { imgesDetailsFileds } from "../JsonData/imageUploadsFileds";
import { getSingleLogo } from "../Actions/companyAction";

export function useImageUploadModel(filedName = "", numberOfImages) {
  console.log("run useImageUplaod");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [imagePrivew, setimagePrivew] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialState = {};
  imgesDetailsFileds.forEach((field) => {
    initialState[field.name] = ""; // Initialize each field with an empty string
  });
  const [imageInfo, setimageInfo] = useState(initialState);

  const updateImageDetails = (fieldName, value) => {
    setimageInfo({ ...imageInfo, [fieldName]: value });
  };

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
    console.log(index);
    const updatedImages = [...uploadedImages];
    const previewImage = [...imagePrivew];
    updatedImages.splice(index, 1);
    previewImage.splice(index, 1);
    setUploadedImages(updatedImages);
    setimagePrivew(previewImage);
  };

  return {
    uploadedImages,
    imagePrivew,
    handelImageSelect,
    isModalOpen,
    openModal,
    closeModal,
    imageInfo,
    updateImageDetails,
    removeImage,
  };
}
