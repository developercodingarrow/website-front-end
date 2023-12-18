import React from "react";
import styles from "./css/inputSecond.module.css";

export default function InputSecond(props) {
  const {
    inputDesign,
    inputPadding,
    inputplaceholder,
    inputContainer,
    inputLabel,
    lableStyle,
    ...inputProps
  } = props;
  return (
    <div className={styles[inputContainer]}>
      {inputLabel && (
        <div className={styles.lable_Box}>
          <label className={styles[lableStyle]}>{inputLabel}</label>
        </div>
      )}

      <div className={styles.inputBox}>
        <input
          className={`${styles[inputDesign]} ${styles[inputPadding]}`}
          {...inputProps}
        />
      </div>
    </div>
  );
}
