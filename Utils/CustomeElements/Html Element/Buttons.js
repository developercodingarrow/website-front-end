import React from "react";
import styles from "../css/buttons.module.css";

export default function Buttons(props) {
  const { text, btnSize, btnAction } = props;
  return (
    <>
      <div>
        <button className={styles[btnSize]} onClick={btnAction}>
          {text}
        </button>
      </div>
    </>
  );
}
