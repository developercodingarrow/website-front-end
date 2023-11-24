import React, { useState } from "react";
import styles from "../css/switchbtn.module.css";

export default function SwitchBtn({ initialPosition }) {
  const [isOn, setIsOn] = useState(initialPosition === "on");

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <div
        className={`${
          isOn ? styles.toggle_switch : styles.toggle_switchActive
        } ${isOn ? styles.on : styles.off}`}
        onClick={toggleSwitch}
      >
        <div className={styles.round_button}></div>
      </div>
    </div>
  );
}
