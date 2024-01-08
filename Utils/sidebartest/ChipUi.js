import React, { useState } from "react";
import CheckBox from "./CheckBox";
import styles from "./SimpleUi/css/chipui.module.css";

export default function ChipUi({ label, options }) {
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
          <CheckBox key={option} value={option} label={option} />
        ))}
      </div>
    </div>
  );
}
