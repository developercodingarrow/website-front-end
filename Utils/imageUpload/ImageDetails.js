import React from "react";
import styles from "./css/imageDetails.module.css";
import { imgesDetailsFileds } from "../../JsonData/imageUploadsFileds";

export default function ImageDetails(props) {
  const { handelImageDetails, imageState } = props;

  const handleInputChange = (fieldName, e) => {
    handelImageDetails(fieldName, e.target.value);
  };

  return (
    <div className={styles.imageDetails}>
      {imgesDetailsFileds.map((detail, index) => (
        <div key={detail.id}>
          <label>{detail.label}</label>
          <input
            type={detail.type}
            name={detail.name}
            placeholder={detail.placeholder}
            value={imageState[detail.name]}
            onChange={(e) => handleInputChange(detail.name, e)}
          />
        </div>
      ))}
    </div>
  );
}
