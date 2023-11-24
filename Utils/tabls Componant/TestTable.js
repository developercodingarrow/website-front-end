import React, { useState } from "react";
import styles from "./css/testTable.module.css";
import { CheckBoxElementsForSingle } from "../CustomeElements/Html Element/CheckBoxElements";
import SwitchBtn from "../CustomeElements/Html Element/SwitchBtn";
import Buttons from "../CustomeElements/Html Element/Buttons";
import IconBtn from "../CustomeElements/Html Element/IconBtn";
import { IoIosArrowBack, IoIosArrowForward } from "../ApplicationIcon";
import usePagination from "../../custome-hooks/usePagination";

const rowNumber = [
  {
    username: "JohnDoe",
    email: "john@example.com",
    status: "active",
    date: "2023-11-24",
  },
  {
    username: "zyan malik",
    email: "john@example.com",
    status: "active",
    date: "2023-11-24",
  },

  {
    username: "JaneSmith",
    email: "jane@example.com",
    status: "inactive",
    date: "2023-11-23",
  },
  {
    username: "AliceJohnson",
    email: "alice@example.com",
    status: "active",
    date: "2023-11-22",
  },
  {
    username: "BobBrown",
    email: "bob@example.com",
    status: "inactive",
    date: "2023-11-21",
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
    date: "2023-11-24",
  },
  {
    username: "JaneSmith",
    email: "jane@example.com",
    status: "inactive",
    date: "2023-11-23",
  },
  {
    username: "AliceJohnson",
    email: "alice@example.com",
    status: "active",
    date: "2023-11-22",
  },
  {
    username: "BobBrown",
    email: "bob@example.com",
    status: "inactive",
    date: "2023-11-21",
  },
  {
    username: "EllaWilliams",
    email: "ella@example.com",
    status: "active",
    date: "2023-11-20",
  },
  {
    username: "EllaWilliams",
    email: "ella@example.com",
    status: "active",
    date: "2023-11-20",
  },
];

export default function TestTable() {
  const {
    currentPage,
    rowsPerPage,
    visibleRows: paginatedRows,
    handleRowsPerPageChange,
    prevPage,
    nextPage,
    startIndex,
    endIndex,
    totalRows,
    handleSearch,
    visibleRows,
    handleSort,
  } = usePagination(rowNumber);
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  const handelbtnAction = () => {
    alert("ok");
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "Recent") {
      handleSort();
    } else if (selectedValue === "old") {
      handleSort();
    }
  };

  return (
    <>
      <div className={styles.table_mainContainer}>
        <div className={styles.table_fillter_bar}>
          <div>
            <div className={styles.sort_box}>
              <select onChange={handleSelectChange}>
                <option value="Recent">Recent</option>
                <option value="old">Old</option>
              </select>
            </div>
          </div>
          <div className={styles.search_Conatiner}>
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="search user"
                onChange={handleSearch}
                className={styles.search_input}
              />
            </div>

            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="search email"
                onChange={handleSearch}
                className={styles.search_input}
              />
            </div>

            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="search mobile "
                onChange={handleSearch}
                className={styles.search_input}
              />
            </div>
          </div>
        </div>
        <div className={styles.table_container}>
          <div className={styles.table_header}>
            <div className={styles.sNo_th}>S No</div>
            <div className={styles.checkBox_th}>
              <CheckBoxElementsForSingle
                chekBoxStatus={isChecked}
                handleCheckboxChange={handleCheckboxChange}
              />
            </div>
            <div className={styles.main_Title_th}>User Name</div>
            <div className={styles.status_th}>Status</div>
            <div className={styles.radio_th}>Radio</div>
            <div className={styles.button_th}>Button</div>
            <div className={styles.Iconbutton_th}>Icon</div>
          </div>
          <div className={styles.table_body}>
            {visibleRows.map((el, i) => {
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
                    <SwitchBtn />
                  </div>
                  <div className={styles.radio_th}>Radio</div>
                  <div className={styles.button_th}>
                    <Buttons
                      text={"Edit"}
                      buttonstyle={"button"}
                      btnColor={"primaryBtnColor"}
                      btnSze={"smallbtn"}
                      btnAction={handelbtnAction}
                    />
                  </div>
                  <div className={styles.Iconbutton_th}>
                    <IconBtn
                      text={"Edit"}
                      buttonstyle={"button"}
                      btnColor={"primaryBtnColor"}
                      btnSze={"smallbtn"}
                      btnAction={handelbtnAction}
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
              <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
            </span>
          </div>
          <div className={styles.pagination_Box}>
            <div>{`${startIndex}-${endIndex} of ${totalRows}`}</div>
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
