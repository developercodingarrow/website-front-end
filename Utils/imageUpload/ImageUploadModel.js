import React, { useState } from "react";
import styles from "./css/imageUploadModel.module.css";
import Image from "next/image";
import { useImageUploadModel } from "../../custome-hooks/useImageUploadModel";
import SimpleImagePreview from "./ImagePreviews/SimpleImagePreview";
import ImageDetails from "./ImageDetails";
import { handelUplaodGallery } from "../Cards/formCards/ImageHandeler";

export default function ImageUploadModel(props) {
  const { isOpen, closeModal } = props;
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const {
    uploadedImages,
    imageInfo,
    handelImageSelect,
    removeImage,
    updateImageDetails,
    formDataArray,
    handelSubmitData,
  } = useImageUploadModel("galleryPhotos");

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handelImageChoose = (e) => {
    handelImageSelect(e.target.files);
  };

  const handelSubmitIamge = async () => {
    await handelSubmitData(formDataArray);
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
                  <input type="file" onChange={handelImageChoose} />
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
