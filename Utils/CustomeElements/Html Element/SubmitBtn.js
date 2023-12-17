import React, { useState } from "react";
import styles from "../css/buttons.module.css";
import LoadingSpinner from "./Loading";

export default function SubmitBtn(props) {
  const { text, buttonstyle, btnColor, btnSze, disabled, loading } = props;

  const buttonClasses = `${styles[buttonstyle]} ${styles[btnColor]} ${styles[btnSze]}`;
  const disableBtn = `${styles.disableStyle}`;

  const btnStyle = disabled ? disableBtn : buttonClasses;

  return (
    <>
      <div>
        <button type="submit" className={btnStyle} disabled={disabled}>
          {loading ? <LoadingSpinner /> : `${text}`}
        </button>
      </div>
    </>
  );
}
