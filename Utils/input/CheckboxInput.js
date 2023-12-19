import React, { useEffect, useState } from "react";

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
    <div>
      <p>Check box imput</p>
      {checkBoxOptions.map((option, index) => {
        return (
          <div>
            <div> {option} </div>
            <input
              type="checkbox"
              value={option}
              {...inputProps}
              onChange={(e) => handleCheckboxChange(option, e.target.checked)}
              checked={checkedOptions.includes(option)}
            />
          </div>
        );
      })}
    </div>
  );
}
