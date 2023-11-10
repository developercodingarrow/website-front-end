import React, { useState, useEffect } from "react";
import styles from "../Utils/CustomeElements/css/checkBoxElements.module.css";
import {
  CheckBoxElementsForSingle,
  CheckBoxElementsForMultiple,
} from "../Utils/CustomeElements/Html Element/CheckBoxElements";

export default function Test() {
  /*
  // Radio Button State
  const [selectedOption, setSelectedOption] = useState(null);

  // Radio Button Select handel Chnage
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  // Radio Optios
  const options = ["red 1", "green", "Yellow"];
*/

  // Checked box
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  // Multiple Chek Box
  const initialCheckboxes = [
    { value: "Option 1", checked: false },
    { value: "Option 2", checked: false },
    { value: "Option 3", checked: false },
  ];

  // Render The check Box
  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);
  const [chekedValues, setchekedValues] = useState([]);

  const handleMultipleCheckboxChange = (value) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.value === value) {
        return { ...checkbox, checked: !checkbox.checked };
      }
      return checkbox;
    });
    setCheckboxes(updatedCheckboxes);

    // Update the checked values
    const updatedCheckedValues = updatedCheckboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    setchekedValues(updatedCheckedValues);
  };
  console.log(chekedValues);
  return (
    <div>
      <div className={styles.radio_wraperContainer}>
        {/* <CheckBoxElementsForSingle
          chekBoxStatus={isChecked}
          handleCheckboxChange={handleCheckboxChange}
        /> */}

        <div className={styles.radio_wraperContainer}>
          {checkboxes.map((checkbox) => (
            <CheckBoxElementsForMultiple
              key={checkbox.value}
              checkboxValue={checkbox.value}
              isChecked={checkbox.checked}
              handleCheckboxChange={handleMultipleCheckboxChange}
            />
          ))}

          {/* Custome Radio Button Start */}
          {/* <RadioButton
          customRadio={"customRadio"}
          customRadioChecked={"customRadioChecked"}
          customRadioButtonContainer={"customRadioButtonContainer"}
          custome_radiolable={"custome_radiolable"}
          cheked_ladiolable={"custome_radiolableCheked"}
          options={options}
          handleOptionChange={handleOptionChange}
          selected={selectedOption}
        /> */}

          {/* Custome Radio Button End */}
        </div>
      </div>
    </div>
  );
}
