import React from "react";
import styles from "./css/selectInput.module.css";
export default function SelectInput(props) {
  const { selectOptions, inputLabel, lableStyle } = props;
  return (
    <div className={styles.selectBox}>
      {inputLabel && (
        <div className={styles.lable_Box}>
          <label className={styles[lableStyle]}>{inputLabel}</label>
        </div>
      )}
      <select className={styles.selectDesign}>
        {selectOptions.map((option, index) => (
          <option key={index} className={styles.optionDesign}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
