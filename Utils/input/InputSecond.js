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
    readOnlyMode = false,

    ...inputProps
  } = props;

  // const inputClasses = readOnlyMode
  //   ? styles.readOnlyInput
  //   : styles.editableInput;

  const inputClasses = `${styles[inputDesign]} ${styles[inputPadding]} ${
    readOnlyMode ? styles.readOnlyInput : styles.editableInput
  }`;
  return (
    <div className={styles[inputContainer]}>
      {inputLabel && (
        <div className={styles.lable_Box}>
          <label className={styles[lableStyle]}>{inputLabel}</label>
        </div>
      )}

      <div className={styles.inputBox}>
        <input
          // className={`${styles[inputDesign]} ${styles[inputPadding]} ${inputClasses}`}
          className={inputClasses}
          {...inputProps}
          readOnly={readOnlyMode}
        />
      </div>
    </div>
  );
}
