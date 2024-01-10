import React, { useState } from "react";
import styles from "../../Utils/CustomeElements/css/checkBoxElements.module.css";

export default function CheckBox({
  value,
  label,
  isChecked,
  handleCheckboxChange,
}) {
  const handleOnChange = () => {
    handleCheckboxChange(value);
  };
  return (
    <>
      <div>
        <label className={styles.customCheckbox}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleOnChange}
            className={styles.checkboxInput}
          />
          <div
            className={`${styles.checkbox} ${isChecked ? styles.checked : ""}`}
          >
            {isChecked && <span className={styles.checkmark}>&#10003;</span>}
          </div>
          {label && (
            <div
              className={`${styles.checkBox_optionLable} ${
                isChecked ? styles.cheked_optionLable : ""
              }`}
            >
              {label}
            </div>
          )}
        </label>
      </div>
    </>
  );
}
