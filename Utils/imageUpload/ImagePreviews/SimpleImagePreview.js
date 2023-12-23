import React, { useState } from "react";
import styles from "./css/simpleImagepreview.module.css";
import Image from "next/image";

export default function SimpleImagePreview(props) {
  const { uploadedImages, handelRemove } = props;

  return (
    <div className={styles.imagePreviews}>
      {uploadedImages.map((image, index) => (
        <div key={index} className={styles.imagePreview}>
          <img src={image} alt={`Preview ${index}`} width={100} height={100} />

          <div>
            <div>
              <button onClick={() => handelRemove(index)}>Remove</button>{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
