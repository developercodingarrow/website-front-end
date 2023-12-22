import React from "react";
import styles from "./css/imageDetails.module.css";
import { imgesDetails } from "../../JsonData/imageUploadsFileds";

export default function ImageDetails(props) {
  const { imageDetails, updateImageDetails, removeImage } = props;

  const handleInputChange = (fieldName, e) => {
    updateImageDetails(fieldName, e.target.value);
  };
  return (
    <div className={styles.imageDetails}>
      {imgesDetails.map((detail) => (
        <div key={detail.id}>
          <label>{detail.label}</label>
          <input
            type={detail.type}
            name={detail.name}
            placeholder={detail.placeholder}
            value={imageDetails?.[detail.name] || ""}
            onChange={(e) => handleInputChange(detail.name, e)}
          />
        </div>
      ))}
      <button onClick={removeImage}>Remove</button>
    </div>
  );
}
