import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import CheckBox from "./CheckBox";
import styles from "./SimpleUi/css/chipui.module.css";
import { CheckBoxElementsForSingle } from "../CustomeElements/Html Element/CheckBoxElements";
import { useCheckboxUrlUpdater } from "../../custome-hooks/useCheckboxUrlUpdater";

export default function ChipUi({ label, options, placeholder }) {
  const { checkedItems, handleCheckboxChange } =
    useCheckboxUrlUpdater(placeholder);
  const [toggle, settoggle] = useState(false);

  const handelToogle = () => {
    settoggle(!toggle);
  };

  return (
    <div className={styles.container}>
      <div className={styles.chip_lable} onClick={handelToogle}>
        <h4>{label}</h4>
      </div>
      <div
        className={
          toggle
            ? styles.chip_options
            : `${styles.chip_options} ${styles.close_chip_options}`
        }
      >
        {options.map((option) => (
          <CheckBox
            key={option}
            value={option}
            label={option}
            isChecked={checkedItems.includes(option)}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
      </div>
    </div>
  );
}
