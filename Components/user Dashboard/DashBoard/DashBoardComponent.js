import React, { useContext, useEffect, useState } from "react";
import styles from "./css/dashBoardcomponent.module.css";
import TestTable2 from "../../../Utils/tabls Componant/TestTable2";
import DynimicTable from "../../../Utils/tabls Componant/DynimicTable";
import { TestContext } from "../../../Context Api/TestContextAppi";

// Sample data
const tableData = [
  {
    id: 1,
    name: "John",
    age: 30,
    isAdmin: true,
    email: "john@example.com",
    country: "USA",
    active: true,
  },
  {
    id: 2,
    name: "Alice",
    age: 25,
    isAdmin: false,
    email: "alice@example.com",
    country: "Canada",
    active: false,
  },

  {
    id: 3,
    name: "John",
    age: 30,
    isAdmin: true,
    email: "john@example.com",
    country: "USA",
    active: true,
  },
  {
    id: 4,
    name: "Alice",
    age: 25,
    isAdmin: false,
    email: "alice@example.com",
    country: "Canada",
    active: false,
  },
  // Add more data as needed
  // ... repeat additional rows
];

export default function DashBoardComponent() {
  const { handelGetData, dataList, handelAction } = useContext(TestContext);
  console.log(dataList);

  useEffect(() => {
    handelGetData();
  }, []);

  // Configuration object for table columns
  const tableColumns = [
    { label: "Name", key: "name", component: "text" },
    { label: "Activ", key: "active", component: "switch" },
    { label: "Plan", key: "plan", component: "radio" },
    { label: "Status", key: "status", component: "checkbox" },
    { label: "DELETE", key: "id", component: "delete" },
    // Add more columns as needed
    // ... repeat additional columns
  ];

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
    console.log("Checkbox checked:", isChecked);
  };

  const handelbtnAction = () => {
    console.log("delete");
  };

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.top_bar}>Top Bar </div>
        <div className={styles.component_container}>
          <div className={styles.left_sideContainer}>
            <DynimicTable
              tableData={dataList}
              tableColumns={tableColumns}
              handleCheckboxChange={handleCheckboxChange}
              handelbtnAction={handelbtnAction}
              handelSwitch={handelAction}
            />
          </div>
          <div className={styles.right_sideContainer}>Right side</div>
        </div>
      </div>
    </>
  );
}
