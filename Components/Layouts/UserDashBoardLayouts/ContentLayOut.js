import React from "react";
import styles from "./css/contentLayout.module.css";

export default function ContentLayOut({ topStats, children }) {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.stats_contaner}>{topStats}</div>
        <div className={styles.content_container}>
          <div className={styles.content_side}>{children}</div>
          <div className={styles.right_side}>Extra Stats</div>
        </div>
      </div>
    </>
  );
}
