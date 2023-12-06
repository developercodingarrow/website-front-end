import React, { useState } from "react";
import styles from "../css/checkBoxElements.module.css";

export function CheckBoxElementsForSingle(props) {
  const { chekBoxStatus, handleCheckboxChange, checkBoxLable, dataId } = props;

  const handleCheckbox = () => {
    handleCheckboxChange();
    console.log("checkboxstatus", chekBoxStatus);
  };
  return (
    <>
      <div>
        <label className={styles.customCheckbox}>
          <input
            type="checkbox"
            checked={chekBoxStatus}
            onChange={handleCheckbox}
            className={styles.checkboxInput}
          />
          <div
            className={`${styles.checkbox} ${
              chekBoxStatus ? styles.checked : ""
            }`}
          >
            {chekBoxStatus && (
              <span className={styles.checkmark}>&#10003;</span>
            )}
          </div>
          {checkBoxLable && (
            <div
              className={`${styles.checkBox_optionLable} ${
                chekBoxStatus ? styles.cheked_optionLable : ""
              }`}
            >
              {checkBoxLable}
            </div>
          )}
        </label>
      </div>
    </>
  );
}

export function CheckBoxElementsForMultiple(props) {
  const { checkboxValue, isChecked, handleCheckboxChange } = props;

  const handleCheckbox = () => {
    handleCheckboxChange(checkboxValue);
    // console.log(checkboxValue);
  };
  return (
    <>
      <div>
        <label className={styles.customCheckbox}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckbox}
            className={styles.checkboxInput}
          />
          <div
            className={`${styles.checkbox} ${isChecked ? styles.checked : ""}`}
          >
            {isChecked && <span className={styles.checkmark}>&#10003;</span>}
          </div>
          <div
            className={`${styles.checkBox_optionLabel} ${
              isChecked ? styles.checked_optionLabel : ""
            }`}
          >
            {checkboxValue}
          </div>
        </label>
      </div>
    </>
  );
}
