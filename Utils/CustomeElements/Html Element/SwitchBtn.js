import React, { useState } from "react";
import styles from "../css/switchbtn.module.css";

export default function SwitchBtn(props) {
  const { status, handelApi, dataId } = props;

  console.log(dataId);

  const [isOn, setIsOn] = useState(status);

  const toggleSwitch = () => {
    const requestData = { _id: dataId };
    setIsOn(!isOn);
    handelApi(requestData);
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
