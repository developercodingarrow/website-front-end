import React, { useState } from "react";
import styles from "./css/imageUploadModel.module.css";
import Image from "next/image";
import { useImageUploadModel } from "../../custome-hooks/useImageUploadModel";
import SimpleImagePreview from "./ImagePreviews/SimpleImagePreview";
import ImageDetails from "./ImageDetails";

export default function ImageUploadModel(props) {
  const { isOpen, closeModal, handelSubmitData, numberOfImages, imageFor } =
    props;
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const {
    uploadedImages,
    imagePrivew,
    imageInfo,
    handelImageSelect,
    removeImage,
    updateImageDetails,
    formDataArray,
  } = useImageUploadModel("galleryPhotos", numberOfImages);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handelImageChoose = (e) => {
    handelImageSelect(e);
  };

  const handelSubmitIamge = async () => {
    await handelSubmitData(uploadedImages, imageFor);
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
              <input type="file" onChange={handelImageChoose} />
            </div>
            <div className={styles.imagePriew_container}>
              <SimpleImagePreview
                uploadedImages={imagePrivew}
                onImageClick={handleImageClick}
              />
            </div>
          </div>
          <div className={styles.image_inputSide}>
            {selectedImageIndex !== null && (
              <div className={styles.imageDetailsWrapper}>
                <ImageDetails
                  imageInfo={imageInfo[selectedImageIndex]}
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
        <div className={styles.model_footer}>
          <button onClick={handelSubmitIamge}>upload image</button>
        </div>
      </div>
    </div>
  );
}
