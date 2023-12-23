import React, { useState } from "react";
import styles from "./css/imageUploadModel.module.css";
import Image from "next/image";
import { useImageUploadModel } from "../../custome-hooks/useImageUploadModel";
import SimpleImagePreview from "./ImagePreviews/SimpleImagePreview";
import ImageDetails from "./ImageDetails";

export default function ImageUploadModel(props) {
  const { isOpen, closeModal, handelSubmitData, numberOfImages, imageFor } =
    props;

  const {
    uploadedImages,
    imagePrivew,
    handelImageSelect,
    updateImageDetails,
    imageInfo,
  } = useImageUploadModel("galleryPhotos", numberOfImages);

  const handelImageChoose = (e) => {
    handelImageSelect(e);
  };

  const handelSubmitIamge = async () => {
    await handelSubmitData(uploadedImages, imageInfo, imageFor);
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
              <SimpleImagePreview uploadedImages={imagePrivew} />
            </div>
          </div>
          <div className={styles.image_inputSide}>
            <div className={styles.imageDetailsWrapper}>
              <ImageDetails
                handelImageDetails={updateImageDetails}
                imageState={imageInfo}
              />
            </div>
          </div>
        </div>
        <div className={styles.model_footer}>
          <button onClick={handelSubmitIamge}>upload image</button>
        </div>
      </div>
    </div>
  );
}
