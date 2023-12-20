import React, { useState, useEffect } from "react";
import styles from "./css/dynimicTable.module.css";
import { CheckBoxElementsForSingle } from "../CustomeElements/Html Element/CheckBoxElements";
import SwitchBtn from "../CustomeElements/Html Element/SwitchBtn";
import Buttons from "../CustomeElements/Html Element/Buttons";
import useTableFillters from "../../custome-hooks/useTableFillters";
import renderCellContent from "../Component-logics/renderTableCellContent";

export default function DynimicTableCopy(props) {
  const {
    tableData,
    tableColumns,
    handleCheckboxChange,
    handelbtnAction,
    handelSwitch,
    visibalRows,
  } = props;

  const handlers = {
    checkbox: handleCheckboxChange,
    delete: handelbtnAction,
    switch: handelSwitch,
    // Add more handlers as needed based on component types
  };

  const {
    // visibalRows,
    totalRows,
    startIndex,
    endIndex,
    rowsPerPage,
    currentPage,
    handleRowsPerPageChangeWrapper,
    updateVisibleRows,
  } = useTableFillters(tableData);

  useEffect(() => {
    updateVisibleRows();
  }, [currentPage, rowsPerPage]);

  return (
    <div className={styles.table_container}>
      <div className={styles.table_wrapper}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr className={styles.tableTr}>
              {tableColumns.map((column) => (
                <th key={column.label}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.table_body}>
            {visibalRows.map((row, no) => (
              <tr key={row.id}>
                {tableColumns.map((column) => (
                  <td key={column.label}>
                    {renderCellContent(
                      row[column.key],
                      row._id,
                      column.component,
                      handlers[column.component]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.table_footerContainer}>
        <div className={styles.row_perPageBox}>Row per page</div>
        <div className={styles.row_selectBox}>
          <select value={rowsPerPage} onChange={handleRowsPerPageChangeWrapper}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div className={styles.row_totalNumerBox}>
          <span>{startIndex}</span>
          <span>-</span>
          <span>{endIndex}</span>
          <span>of</span>
          <span>{totalRows}</span>
        </div>

        <div className={styles.row_arrowBox}>
          <span>{"<"}</span>
          <span>{">"}</span>
        </div>
      </div>
    </div>
  );
}
