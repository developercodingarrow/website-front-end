import React, { useEffect } from "react";
import SimpleDateRange from "../DateRanges/SimpleDateRange";
import useTableFillters from "../../../custome-hooks/useTableFillters";
import SimpleTableSearch from "../TableSearch/SimpleTableSearch";
import styles from "./css/simpleFillter.module.css";

export default function SimpleFillter(props) {
  const { data } = props;
  const {
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
    filterByDate,
    filterDataByUsername,
    updateVisibleRows,
    currentPage,
    rowsPerPage,
  } = useTableFillters(data);

  useEffect(() => {
    updateVisibleRows();
  }, [currentPage, rowsPerPage]);

  const handleApplyDateRange = () => {
    // Call the filter function with the selected date range
    filterByDate(startDate, endDate);
  };

  return (
    <>
      <div className={styles.main_Container}>
        <div className={styles.date_BoxWrapper}>
          <SimpleDateRange
            startDateValue={startDate}
            endDateValue={endDate}
            handelStartDate={handleStartDateChange}
            handelEndDate={handleEndDateChange}
            handelBtn={handleApplyDateRange}
          />
        </div>
        <div className={styles.search_FiledBox}>
          <div className={styles.search_Boxwrapper}>
            <SimpleTableSearch
              handelsearchBy={filterDataByUsername}
              searchFiled={"username"}
              placholder="Search users"
            />
          </div>
          <div className={styles.search_Boxwrapper}>
            <SimpleTableSearch
              handelsearchBy={filterDataByUsername}
              searchFiled={"email"}
              placholder="Search E-mail"
            />
          </div>

          <div className={styles.search_Boxwrapper}>
            <SimpleTableSearch
              handelsearchBy={filterDataByUsername}
              searchFiled={"mobileNumber"}
              placholder="search Mobile Number"
            />
          </div>
        </div>
      </div>
    </>
  );
}
