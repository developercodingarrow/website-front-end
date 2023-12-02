import React, { useState, useEffect } from "react";
import styles from "./css/testTable.module.css";
import { CheckBoxElementsForSingle } from "../CustomeElements/Html Element/CheckBoxElements";
import SwitchBtn from "../CustomeElements/Html Element/SwitchBtn";
import Buttons from "../CustomeElements/Html Element/Buttons";
import IconBtn from "../CustomeElements/Html Element/IconBtn";
import { IoIosArrowBack, IoIosArrowForward } from "../ApplicationIcon";
import useTableFillters from "../../custome-hooks/useTableFillters";
import { paginate } from "../../Utils/Component-logics/paginationFunctions";
import SimpleSortBtn from "./sortBtns/SimpleSortBtn";
import SimpleDateRange from "./DateRanges/SimpleDateRange";
import SimpleTableSearch from "./TableSearch/SimpleTableSearch";

const rowNumber = [
  {
    username: "JohnDoe",
    email: "john@example.com",
    status: "active",
    date: "2023-11-15",
  },
  {
    username: "zyan malik",
    email: "john@example.com",
    status: "active",
    date: "2023-11-16",
  },

  {
    username: "JaneSmith",
    email: "jane@example.com",
    status: "inactive",
    date: "2023-11-17",
  },
  {
    username: "AliceJohnson",
    email: "alice@example.com",
    status: "active",
    date: "2023-11-18",
  },
  {
    username: "BobBrown",
    email: "bob@example.com",
    status: "inactive",
    date: "2023-11-19",
  },
  {
    username: "EllaWilliams",
    email: "ella@example.com",
    status: "active",
    date: "2023-11-20",
  },
  {
    username: "JohnDoe",
    email: "john@example.com",
    status: "active",
    date: "2023-11-21",
  },
  {
    username: "JaneSmith",
    email: "jane@example.com",
    status: "inactive",
    date: "2023-11-22",
  },
  {
    username: "AliceJohnson",
    email: "alice@example.com",
    status: "active",
    date: "2023-11-23",
  },
  {
    username: "BobBrown",
    email: "bob@example.com",
    status: "inactive",
    date: "2023-11-24",
  },
  {
    username: "EllaWilliams",
    email: "ella@example.com",
    status: "active",
    date: "2023-11-25",
  },
  {
    username: "EllaWilliams",
    email: "ella@example.com",
    status: "active",
    date: "2023-11-26",
  },
];

export default function TestTable2() {
  const [isChecked, setIsChecked] = useState(true);

  const {
    visibalRows,
    nextPage,
    prevPage,
    rowsPerPage,
    handleRowsPerPageChangeWrapper,
    totalRows,
    startIndex,
    endIndex,
    currentPage,
    sortDataByDate,
    filterDataByUsername,
    updateVisibleRows,
    filterByDate,
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
  } = useTableFillters(rowNumber);

  const handleApplyDateRange = () => {
    // Call the filter function with the selected date range
    filterByDate(startDate, endDate);
  };

  useEffect(() => {
    updateVisibleRows();
    console.log("useEffect");
  }, [currentPage, rowsPerPage]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  return (
    <>
      <div className={styles.table_mainContainer}>
        <div className={styles.table_fillter_bar}>
          <div className={styles.fillter_topBar}>
            <div className={styles.sort_box}>
              <SimpleSortBtn handelSelectSort={sortDataByDate} />
            </div>
            <div className={styles.dateInput}>
              <SimpleDateRange
                startDateValue={startDate}
                endDateValue={endDate}
                handelStartDate={handleStartDateChange}
                handelEndDate={handleEndDateChange}
                handelBtn={handleApplyDateRange}
              />
            </div>
            <div>row count</div>
          </div>
          <div className={styles.search_Conatiner}>
            <SimpleTableSearch handelsearchBy={filterDataByUsername} />
          </div>
        </div>
        <div className={styles.table_container}>
          <div className={styles.table_header}>
            <div className={styles.sNo_th}>S No</div>
            <div className={styles.checkBox_th}>
              <input type="text" />
            </div>
            <div className={styles.main_Title_th}>User Name</div>
            <div className={styles.status_th}>Status</div>
            <div className={styles.radio_th}>Radio</div>
            <div className={styles.button_th}>Button</div>
            <div className={styles.Iconbutton_th}>Icon</div>
          </div>
          <div className={styles.table_body}>
            {visibalRows.map((el, i) => {
              return (
                <div className={styles.table_row}>
                  <div className={styles.sNo_th}>{i + 1}</div>
                  <div className={styles.checkBox_th}>
                    <CheckBoxElementsForSingle
                      chekBoxStatus={isChecked}
                      handleCheckboxChange={handleCheckboxChange}
                    />
                  </div>
                  <div className={styles.main_Title_th}>{el.username}</div>
                  <div className={styles.status_th}>
                    {" "}
                    <SwitchBtn />{" "}
                  </div>
                  <div className={styles.radio_th}>Radio</div>
                  <div className={styles.button_th}>
                    <Buttons
                      text={"check"}
                      buttonstyle={"smallbtn"}
                      btnColor={"seconderyBtnColor"}
                      btnSze={"smallbtn"}
                      btnAction={handleApplyDateRange}
                    />
                  </div>
                  <div className={styles.Iconbutton_th}>
                    <IconBtn
                      icontype={"deleteIcon"}
                      buttonstyle={"smallbtn"}
                      btnColor={"seconderyBtnColor"}
                      btnSze={"smallbtn"}
                      btnAction={handleApplyDateRange}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.table_footer}>
          <div className={styles.page_prRowBox}>
            <span>Rows Per Page</span>
            <span>
              <select
                value={rowsPerPage}
                onChange={handleRowsPerPageChangeWrapper}
              >
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
              </select>
            </span>
          </div>
          <div className={styles.pagination_Box}>
            <div> {`${startIndex}-${endIndex} of ${totalRows}`}</div>
            <div className={styles.pagination_ArrowBox}>
              <span onClick={prevPage}>
                {" "}
                <IoIosArrowBack />
              </span>
              <span onClick={nextPage}>
                <IoIosArrowForward />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
