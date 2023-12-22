import { useState } from "react";

export function useImageUploadModel() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [imageDetails, setImageDetails] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpload = (files) => {
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
      setImageDetails([...imageDetails, {}]);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = (index) => {
    const updatedImages = [...uploadedImages];
    updatedImages.splice(index, 1);
    setUploadedImages(updatedImages);

    const updatedDetails = [...imageDetails];
    updatedDetails.splice(index, 1);
    setImageDetails(updatedDetails);
  };

  const updateImageDetails = (index, fieldName, value) => {
    const updatedDetails = [...imageDetails];
    updatedDetails[index] = { ...updatedDetails[index], [fieldName]: value };
    setImageDetails(updatedDetails);
  };

  return {
    uploadedImages,
    imageDetails,
    handleUpload,
    removeImage,
    updateImageDetails,
    isModalOpen,
    openModal,
    closeModal,
  };
}
