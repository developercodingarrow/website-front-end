import React from "react";
import styles from "./css/simpleTableSearch.module.css";

export default function SimpleTableSearch(props) {
  const { handelsearchBy, searchFiled, placholder } = props;
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder={placholder}
        className={styles.search_input}
        onChange={(e) => handelsearchBy(e.target.value, searchFiled)}
      />
    </div>
  );
}
