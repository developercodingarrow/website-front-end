import React, { useEffect, useState } from "react";
import styles from "./css/ProductSidebar.module.css";
import useDataFillter from "../../custome-hooks/useDataFillter";

export default function ProductSidebar(props) {
  const { fields } = props;

  const { renderInput } = useDataFillter("simple");

  return (
    <>
      <div className={styles.sideBar_container}>
        {fields.map((input) => (
          <div key={input._id}>{renderInput(input)}</div>
        ))}
      </div>
    </>
  );
}
