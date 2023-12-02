import React from "react";
import styles from "./css/simpleSort.module.css";

export default function SimpleSortBtn(props) {
  const { handelSelectSort } = props;
  return (
    <div>
      <select
        onChange={(e) => handelSelectSort(e.target.value)}
        className={styles.selectButton}
      >
        <option value="old" className={styles.options_style}>
          Old
        </option>
        <option value="new" className={styles.options_style}>
          New
        </option>
      </select>
    </div>
  );
}
