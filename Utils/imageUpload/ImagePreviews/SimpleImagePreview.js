import React, { useState } from "react";
import styles from "./css/simpleImagepreview.module.css";
import Image from "next/image";

export default function SimpleImagePreview(props) {
  const { uploadedImages, onImageClick } = props;

  return (
    <div className={styles.imagePreviews}>
      {uploadedImages.map((image, index) => (
        <div
          key={index}
          className={styles.imagePreview}
          onClick={() => onImageClick(index)}
        >
          <img src={image} alt={`Preview ${index}`} width={100} height={100} />
        </div>
      ))}
    </div>
  );
}
