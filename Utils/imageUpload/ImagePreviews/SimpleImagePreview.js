import React, { useState } from "react";
import styles from "./css/simpleImagepreview.module.css";
import Image from "next/image";
import sampleImage from "../../../public/companies-gallery-images/gallery-image-1703315616207-images.jpg";
export default function SimpleImagePreview(props) {
  const { imagesList, handelRemove, actionFor } = props;

  const handleDeleteImage = (id) => {
    handelRemove(id);
  };

  const handleRemoveImage = (i) => {
    handelRemove(i);
  };

  return (
    <div className={styles.imagePreviews}>
      {imagesList.map((image, index) => (
        <div key={index} className={styles.imageCard}>
          {actionFor === "api" && (
            <>
              <Image
                src={`/companies-gallery-images/${image.url}`}
                alt={image.altText}
                width={100}
                height={100}
                className={styles.image}
              />
              <span
                className={styles.closeIcon}
                onClick={() => handleDeleteImage(image._id)}
              >
                &times;
              </span>
            </>
          )}
          {actionFor === "static" && (
            <>
              <Image
                src={image}
                alt="sample alt"
                width={100}
                height={100}
                className={styles.image}
              />
              <span
                className={styles.closeIcon}
                onClick={() => handleRemoveImage(index)}
              >
                &times;
              </span>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
