import React, { useEffect, useState } from "react";
import styles from "./css/checkBoxinput.module.css";

export default function CheckboxInput(props) {
  const { onChange, checkBoxOptions, defaultValue, ...inputProps } = props;
  const [checkedOptions, setCheckedOptions] = useState([]);

  useEffect(() => {
    if (defaultValue && defaultValue.length > 0) {
      setCheckedOptions(defaultValue);
      onChange(defaultValue);
    }
  }, [defaultValue]);

  const handleCheckboxChange = (option, isChecked) => {
    let updatedOptions;

    if (isChecked) {
      updatedOptions = [...checkedOptions, option];
    } else {
      updatedOptions = checkedOptions.filter((item) => item !== option);
    }

    setCheckedOptions(updatedOptions);
    onChange(updatedOptions);
  };

  return (
    <div className={styles.main_Container}>
      <div className={styles.title_box}>
        <p>service</p>
      </div>

      <div className={styles.checkBox_container}>
        {checkBoxOptions.map((option, index) => {
          return (
            <div className={styles.checkBox_wrapper}>
              <div className={styles.lable_Box}> {option} </div>
              <div className={styles.input_box}>
                <input
                  type="checkbox"
                  value={option}
                  {...inputProps}
                  onChange={(e) =>
                    handleCheckboxChange(option, e.target.checked)
                  }
                  checked={checkedOptions.includes(option)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
