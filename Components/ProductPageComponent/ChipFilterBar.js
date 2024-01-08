import React from "react";
import styles from "./css/chipfillterbar.module.css";
import useDataFillter from "../../custome-hooks/useDataFillter";

export default function ChipFilterBar(props) {
  const { fields } = props;

  const { renderInput } = useDataFillter("chip");
  return (
    <>
      <div className={styles.wrapper}>
        {fields.map((input) => (
          <div key={input._id}>{renderInput(input)}</div>
        ))}
      </div>
    </>
  );
}
