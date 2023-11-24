import React from "react";
import styles from "../css/buttons.module.css";
import { MdDelete } from "../../ApplicationIcon";

export default function IconBtn(props) {
  const { text, buttonstyle, btnColor, btnSze, btnAction } = props;

  const buttonClasses = `${styles[buttonstyle]} ${styles[btnColor]} ${styles[btnSze]}`;
  return (
    <>
      <div>
        <button className={buttonClasses} onClick={btnAction}>
          <MdDelete />
        </button>
      </div>
    </>
  );
}
