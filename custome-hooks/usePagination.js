import { useState } from "react";

const usePagination = (initialRows, initialRowsPerPage = 5) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [sortType, setSortType] = useState(null); // Track sorting type

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [visibleRows, setvisibleRows] = useState([]);

  const totalRows = initialRows.length;

  const handleStartDateChange = (date) => {
    setStartDate(date);
    console.log(startDate);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    console.log(endDate);
  };

  const filterByDateRange = (rows) => {
    if (!startDate || !endDate) {
      return rows;
    }

    return rows.filter((row) => {
      const rowDate = new Date(row.date);
      const start = new Date(startDate);
      const end = new Date(endDate);

      return rowDate >= start && rowDate <= end;
    });
  };

  const handleDateFilter = () => {
    // Apply Date Range filter logic here
    const filteredRows = filterByDateRange(initialRows);
    console.log(filteredRows);
    setCurrentPage(1); // Reset to the first page after filtering
    setvisibleRows(filteredRows);
  };

  // Sort data recent old by date
  const sortRowsByDate = (rows, type) => {
    return [...rows].sort((a, b) => {
      if (type === "asc") {
        return new Date(a.date) - new Date(b.date);
      } else if (type === "desc") {
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });
  };

  const handleSort = () => {
    if (!sortType || sortType === "desc") {
      setSortType("asc");
    } else {
      setSortType("desc");
    }
    setCurrentPage(1); // Reset to the first page after sorting
    updateVisibleRows(); // Update visible rows after sorting
  };

  // Handel Search By user
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredUsers = initialRows.filter((user) =>
      user.username.toLowerCase().includes(term.toLowerCase())
    );
    setvisibleRows(filteredUsers);
    setCurrentPage(1); // Reset to the first page after search
  };

  const updateVisibleRows = () => {
    let rowsToDisplay = searchTerm ? searchResults : initialRows;

    // Apply sorting
    if (sortType) {
      rowsToDisplay = sortRowsByDate(rowsToDisplay, sortType);
    }
    const updatedVisibleRows = rowsToDisplay.slice(
      (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage
    );
    setvisibleRows(updatedVisibleRows);
  };

  const handleRowsPerPageChange = (e) => {
    const selectedRowsPerPage = Number(e.target.value);
    setRowsPerPage(selectedRowsPerPage);
    setCurrentPage(1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * rowsPerPage + 1;
  const endIndex = Math.min(startIndex + rowsPerPage - 1, totalRows);

  const rowCount = visibleRows.length;

  return {
    currentPage,
    rowsPerPage,
    visibleRows,
    handleRowsPerPageChange,
    prevPage,
    nextPage,
    startIndex,
    endIndex,
    totalRows,
    handleSearch,
    handleSort,
    startDate,
    endDate,
    handleDateFilter,
    handleStartDateChange,
    handleEndDateChange,
    updateVisibleRows,
    rowCount,
  };
};

export default usePagination;
