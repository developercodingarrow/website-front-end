import React from "react";
import styles from "./css/input.module.css";

export default function Input(props) {
  const {
    inputDesign,
    inputPadding,
    inputplaceholder,
    inputContainer,
    inputLabel,
    ...inputProps
  } = props;
  const classNames = `${inputDesign} ${styles[inputPadding]}`.trim();
  return (
    <>
      <div className={styles[inputContainer]}>
        {inputLabel && (
          <div className={styles.lable_Box}>
            <label>{inputLabel}</label>
          </div>
        )}
        <div className={styles.inputBox}>
          <input className={classNames} {...inputProps} />
        </div>
      </div>
    </>
  );
}
