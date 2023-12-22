import React, { useState } from "react";
import styles from "./css/imageUploadModel.module.css";
import Image from "next/image";
import { useImageUploadModel } from "../../custome-hooks/useImageUploadModel";
import SimpleImagePreview from "./ImagePreviews/SimpleImagePreview";
import ImageDetails from "./ImageDetails";

export default function ImageUploadModel(props) {
  const { isOpen, closeModal, handleImageUpload, uploadedImage } = props;
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const {
    uploadedImages,
    imageDetails,
    handleUpload,
    removeImage,
    updateImageDetails,
  } = useImageUploadModel();

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleInputChange = (e) => {
    handleUpload(e.target.files);
  };

  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ""}`}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={closeModal}>
          &times;
        </span>
        <div className={styles.inner_container}>
          <div className={styles.uplaod_imageSide}>
            <div className={styles.image_upoaldBtnPart}>
              <h2>Upload Image</h2>
              {[...Array(props.numberOfImages)].map((_, index) => (
                <div key={index} className={styles.imageInput}>
                  <label>Image {index + 1}:</label>
                  <input type="file" onChange={handleInputChange} />
                </div>
              ))}
            </div>
            <div className={styles.imagePriew_container}>
              <SimpleImagePreview
                uploadedImages={uploadedImages}
                onImageClick={handleImageClick}
              />
            </div>
          </div>
          <div className={styles.image_inputSide}>
            {selectedImageIndex !== null && (
              <div className={styles.imageDetailsWrapper}>
                <ImageDetails
                  imageDetails={imageDetails[selectedImageIndex]}
                  updateImageDetails={(fieldName, value) =>
                    updateImageDetails(selectedImageIndex, fieldName, value)
                  }
                  removeImage={() => {
                    removeImage(selectedImageIndex);
                    setSelectedImageIndex(null);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
