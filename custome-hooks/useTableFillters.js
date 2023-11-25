import React, { useState, useEffect } from "react";
import {
  goToNextPage,
  goToPreviousPage,
  goToPage,
  handleRowsPerPageChange,
} from "../Utils/Component-logics/paginationFunctions";
import { sortByDate } from "../Utils/Component-logics/sortingFunctions";
import { filterByUsername } from "../Utils/Component-logics/filteringFunctions";
import { filterByDateRange } from "../Utils/Component-logics/dateRangeFilter";

export default function useTableFillters(initialRows, initialRowsPerPage = 3) {
  const totalRows = initialRows.length;
  const [visibalRows, setvisibalRows] = useState([]);
  const [rowsPerPage, setrowsPerPage] = useState(initialRowsPerPage);
  const [currentPage, setcurrentPage] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Direct To to page Number
  const setPage = (pageNumber) => {
    goToPage(pageNumber, setcurrentPage);
  };

  // For Next page
  const nextPage = () => {
    goToNextPage(currentPage, totalRows, rowsPerPage, setcurrentPage);
    updateVisibleRows();
  };

  // For Previous page
  const prevPage = () => {
    goToPreviousPage(currentPage, setcurrentPage);
    updateVisibleRows();
  };

  // For select row
  const handleRowsPerPageChangeWrapper = (e) => {
    handleRowsPerPageChange(e, setrowsPerPage, setcurrentPage);
  };

  const startIndex = (currentPage - 1) * rowsPerPage + 1;
  const endIndex = Math.min(startIndex + rowsPerPage - 1, totalRows);

  // Function to sort data by date
  const sortDataByDate = (order) => {
    const sortedData = sortByDate(initialRows, order);
    updateVisibleRows(sortedData);
  };

  // Function to filter data by username
  const filterDataByUsername = (searchTerm) => {
    const filteredData = filterByUsername(initialRows, searchTerm);
    updateVisibleRows(filteredData);
  };

  /*****************************************
   * **** These LOgic for date Range Fillter
   ***************************************/
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };
  // Fundtion to date rage fillter

  const filterByDate = (startDate, endDate) => {
    console.log(startDate);
    console.log(endDate);
    const filteredData = filterByDateRange(initialRows, startDate, endDate);
    console.log(filteredData);
    updateVisibleRows(filteredData);
    // Perform other logic with filteredData
  };

  const updateVisibleRows = (data) => {
    let rowsToDisplay = data || initialRows; // Use sorted data if available
    let startpageIndex = (currentPage - 1) * rowsPerPage;
    const endPageIndex = currentPage * rowsPerPage;
    const updatedVisibleRows = rowsToDisplay.slice(
      startpageIndex,
      endPageIndex
    );
    setvisibalRows(updatedVisibleRows);
  };

  return {
    visibalRows,
    nextPage,
    prevPage,
    rowsPerPage,
    handleRowsPerPageChangeWrapper,
    totalRows,
    startIndex,
    endIndex,
    sortDataByDate,
    updateVisibleRows,
    filterDataByUsername,
    filterByDate,
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
  };
}
