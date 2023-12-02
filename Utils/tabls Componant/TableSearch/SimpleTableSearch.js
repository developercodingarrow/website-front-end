import React from "react";
import styles from "./css/simpleTableSearch.module.css";

export default function SimpleTableSearch(props) {
  const { handelsearchBy } = props;
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="search user"
        className={styles.search_input}
        onChange={(e) => handelsearchBy(e.target.value)}
      />
    </div>
  );
}
