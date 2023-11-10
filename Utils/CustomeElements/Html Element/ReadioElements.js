import React, { useState, useEffect } from "react";
import styles from "../css/radioElements.module.css";

export function RadioButton(props) {
  const {
    customRadio,
    customRadioChecked,
    customRadioButtonContainer,
    custome_radiolable,
    cheked_ladiolable,
    options,
    selected,
    handleOptionChange,
  } = props;

  const handelOptionControll = (optionValue) => {
    handleOptionChange(optionValue);
  };

  return (
    <>
      <div className={styles[customRadioButtonContainer]}>
        <div className={styles.radio_Title}>Colors</div>
        {options.map((el, i) => {
          return (
            <>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="customRadio"
                  value={el}
                  checked={selected === el}
                  onChange={() => handelOptionControll(el)}
                  className={styles.customInput} // Add a class name to the input element
                />
                <span
                  className={`${styles[customRadio]} ${
                    selected === el ? styles[customRadioChecked] : ""
                  }`}
                ></span>{" "}
                <span
                  className={`${styles[custome_radiolable]} ${
                    selected === el ? styles[cheked_ladiolable] : ""
                  }`}
                >
                  {el}
                </span>
              </label>
            </>
          );
        })}
      </div>
    </>
  );
}
