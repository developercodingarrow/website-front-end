import React from "react";
import styles from "./css/simpleDateRange.module.css";
import Buttons from "../../CustomeElements/Html Element/Buttons";

export default function SimpleDateRange(props) {
  const {
    handelStartDate,
    handelEndDate,
    handelBtn,
    startDateValue,
    endDateValue,
  } = props;
  return (
    <div className={styles.dateInput_container}>
      <input
        type="date"
        placeholder="Start Date"
        value={startDateValue}
        onChange={handelStartDate}
        className={styles.input}
      />
      <input
        type="date"
        placeholder="End Date"
        value={endDateValue}
        onChange={handelEndDate}
        className={styles.input}
      />
      <Buttons
        text={"Apply"}
        buttonstyle={"button"}
        btnColor={"primaryBtnColor"}
        btnSze={"smallbtn"}
        btnAction={handelBtn}
      />
    </div>
  );
}
