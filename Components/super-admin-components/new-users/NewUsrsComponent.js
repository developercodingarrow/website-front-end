import React from "react";
import styles from "../css/newUse.module.css";
import DynamicTable from "../../../Utils/tabls Componant/DynimicTable";
import { newUserColumn } from "../../../JsonData/TableData";
const sampleData = [
  {
    _id: "1",
    name: "sanjay",
    email: "sanjay@gmail.com",
    mobileNumber: "9992118210",
    date: "20-12-2023",
  },
  {
    _id: "2",
    name: "sanjay",
    email: "sanjay@gmail.com",
    mobileNumber: "9992118210",
    date: "20-12-2023",
  },
  {
    _id: "3",
    name: "sanjay",
    email: "sanjay@gmail.com",
    mobileNumber: "9992118210",
    date: "20-12-2023",
  },
  {
    _id: "4",
    name: "sanjay",
    email: "sanjay@gmail.com",
    mobileNumber: "9992118210",
    date: "20-12-2023",
  },
  {
    _id: "5",
    name: "sanjay",
    email: "sanjay@gmail.com",
    mobileNumber: "9992118210",
    date: "20-12-2023",
  },
  {
    _id: "6",
    name: "sanjay",
    email: "sanjay@gmail.com",
    mobileNumber: "9992118210",
    date: "20-12-2023",
  },
  {
    _id: "7",
    name: "sanjay",
    email: "sanjay@gmail.com",
    mobileNumber: "9992118210",
    date: "20-12-2023",
  },
];

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
