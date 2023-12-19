import React from "react";
import styles from "./css/radioinput.module.css";

export default function RadioInput(props) {
  const {
    radioOptions,
    onChange,
    selectedOption,
    radiostyle,
    radioTitleGap,
    radio_textgap,
    radioOptionBox,
  } = props;

  const handleRadioChange = (option) => {
    onChange(option);
  };

  const radioContainer = `${styles[radiostyle]} ${styles[radioTitleGap]}`;

  return (
    <div className={radioContainer}>
      <div className={styles.radio_title}>lable</div>
      <div className={styles[radioOptionBox]}>
        {radioOptions.map((option, index) => (
          <div
            className={`${styles.radioOption} ${
              selectedOption === option ? styles.selected : ""
            }`}
            key={index}
            onClick={() => handleRadioChange(option)}
          >
            <div className={`${styles.outerCircle} ${styles.selected}`}>
              {selectedOption === option && (
                <div className={`${styles.innerDot} ${styles.selected}`}></div>
              )}
            </div>
            <div className={styles[radio_textgap]}>
              {" "}
              <label>{option}</label>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
 <div className={styles.radioContainer}>
      {RadioOptions.map((option, index) => (
        <div key={index} className={styles.radioOption}>
          <label>
            <input
              type="radio"
              value={option}
              onChange={() => handleRadioChange(option)}
              checked={selectedOption === option}
            />
            {option}
          </label>
        </div>
      ))}
    </div>

*/
