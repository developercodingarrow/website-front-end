import React from "react";
import styles from "./css/imageDetails.module.css";
import { imgesDetailsFileds } from "../../JsonData/imageUploadsFileds";

export default function ImageDetails(props) {
  const {
    handelImageDetails,
    imageState,
    input_wrapper,
    inputDesign,
    inputPadding,
    lableStyle,
    readOnlyMode,
  } = props;

  const handleInputChange = (fieldName, e) => {
    handelImageDetails(fieldName, e.target.value);
  };

  const inputClasses = `${styles[inputDesign]} ${styles[inputPadding]} ${
    readOnlyMode ? styles.readOnlyInput : styles.editableInput
  }`;

  return (
    <div className={styles.imageDetails_container}>
      {imgesDetailsFileds.map((detail, index) => (
        <div key={detail.id} className={styles[input_wrapper]}>
          {detail.label && (
            <div>
              <label className={styles[lableStyle]}>{detail.label}</label>
            </div>
          )}

          <div>
            <input
              type={detail.type}
              name={detail.name}
              placeholder={detail.placeholder}
              value={imageState[detail.name]}
              onChange={(e) => handleInputChange(detail.name, e)}
              className={inputClasses}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
