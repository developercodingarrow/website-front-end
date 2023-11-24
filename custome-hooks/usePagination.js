import { useState } from "react";

const usePagination = (initialRows, initialRowsPerPage = 5) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [sortType, setSortType] = useState(null); // Track sorting type

  const totalRows = initialRows.length;

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

  // Handel Search By user
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredUsers = initialRows.filter((user) =>
      user.username.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredUsers);
    setCurrentPage(1); // Reset to the first page after search
  };

  const handleSort = () => {
    if (!sortType || sortType === "desc") {
      setSortType("asc");
    } else {
      setSortType("desc");
    }
    setCurrentPage(1); // Reset to the first page after sorting
  };

  let sortedRows = initialRows;
  if (sortType) {
    sortedRows = sortRowsByDate(initialRows, sortType);
  }

  const visibleRows = searchTerm
    ? searchResults.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
      )
    : sortedRows.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
      );

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
  };
};

export default usePagination;
