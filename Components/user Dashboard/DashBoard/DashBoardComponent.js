import React from "react";
import styles from "./css/dashBoardcomponent.module.css";
import TestTable from "../../../Utils/tabls Componant/TestTable";

export default function DashBoardComponent() {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.top_bar}>Top Bar </div>
        <div className={styles.component_container}>
          <div className={styles.left_sideContainer}>
            <TestTable />{" "}
          </div>
          <div className={styles.right_sideContainer}>Right side</div>
        </div>
      </div>
    </>
  );
}
