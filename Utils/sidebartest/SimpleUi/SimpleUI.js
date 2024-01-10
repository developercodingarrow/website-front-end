import React from "react";
import CheckBox from "../CheckBox";
import styles from "./css/simpleUi.module.css";
import { useCheckboxUrlUpdater } from "../../../custome-hooks/useCheckboxUrlUpdater";

export default function SimpleUI({ label, options, placeholder }) {
  const { checkedItems, handleCheckboxChange } =
    useCheckboxUrlUpdater(placeholder);
  return (
    <div>
      <div>
        <div className={styles.titleBox}>
          <h4>{label}</h4>
        </div>

        <div className={styles.list_conatiner}>
          {options.map((option) => (
            <>
              <div className={styles.list_wrapper}>
                <CheckBox
                  key={option}
                  value={option}
                  label={option}
                  isChecked={checkedItems.includes(option)}
                  handleCheckboxChange={() => handleCheckboxChange(option)}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
