import React from "react";
import styles from "../css/newUse.module.css";
import DynamicTable from "../../../Utils/tabls Componant/DynimicTable";
import { newUserColumn, sampleData } from "../../../JsonData/TableData";

export default function NewUsrsComponent() {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.fiilter_container}>Fiilter bar </div>
        <div className={styles.table_Container}>
          <DynamicTable tableData={sampleData} tableColumns={newUserColumn} />
        </div>
      </div>
    </>
  );
}
