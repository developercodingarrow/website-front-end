// useImageUpload.js
import { useState } from "react";

const useImageUpload = (uploadHandler, initialImage = null, itemId = null) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const UploadImage = () => {
    uploadHandler(image, itemId);
  };

  return { image, handleImageChange, UploadImage };
};

export default useImageUpload;
