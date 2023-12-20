import React, { useContext } from "react";
import styles from "../css/newUse.module.css";
import DynimicTableCopy from "../../../Utils/tabls Componant/DynimicTable";
import { newUserColumn, sampleData } from "../../../JsonData/TableData";
import SimpleFillter from "../../../Utils/tabls Componant/fillterComponent/SimpleFillter";
import { FillterContext } from "../../../Context Api/FillterContext";

export default function NewUsrsComponent() {
  const { visibalRows, setvisibalRows } = useContext(FillterContext);
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.fiilter_container}>
          <SimpleFillter data={sampleData} />
        </div>
        <div className={styles.table_Container}>
          <DynimicTableCopy
            visibalRows={visibalRows}
            tableData={sampleData}
            tableColumns={newUserColumn}
          />
        </div>
      </div>
    </>
  );
}
