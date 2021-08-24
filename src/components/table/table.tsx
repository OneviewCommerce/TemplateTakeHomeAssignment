/*
 * Table Component - uses react-table for data handling, filter, pagination logic
 * Accepts the following props:
 * tableData = is an Array of Objects to display
 * tableColumns = is an Array of Objects with Header: string, accessor: string, disableFilters:boolean(optional)
 * onRowClick = is a callback function to handle clicking rows (optional)
 */

import React, { useMemo } from "react";
import { useTable, useFilters, usePagination } from "react-table";
import { Message } from "../lib";

import Style from "./table.module.scss";

// Filter Component needed by useTable
const DefaultColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter },
}: any): React.ReactElement => {
  const dataCount = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${dataCount} records`}
    />
  );
};

// Table Component
export function Table({ tableData, tableColumns, onRowClick }: any): React.ReactElement {
  const defaultColumn = useMemo(() => ({ Filter: DefaultColumnFilter }), []);

  const data = useMemo(() => tableData || [], [tableData]);
  const columns = useMemo(() => tableColumns || [], [tableColumns]);

  const tableInstance = useTable(
    { columns, data, defaultColumn, initialState: { pageIndex: 0, pageSize: 10 } },
    useFilters,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;

  let showMessage = false;

  return (
    <>
      <table className={Style.table} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  !column.filteredRows.length ? (showMessage = true) : (showMessage = false);
                  return (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                      <div className={Style.search}>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                className={Style.row}
                {...row.getRowProps()}
                style={onRowClick && { cursor: "pointer" }}
                onClick={() => {
                  const user: any = { ...row.original };
                  if (onRowClick) onRowClick(user.id);
                }}
              >
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {showMessage && <Message message={"There's nothing in the table"} />}
      <PaginationControls
        gotoPage={gotoPage}
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        pageCount={pageCount}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </>
  );
}

type controlProps = {
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  canPreviousPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
  canNextPage: boolean;
  pageCount: number;
  pageIndex: number;
  pageOptions: number[];
  pageSize: number;
  setPageSize: (pageSize: number) => void;
};

// Componenent to render for controlling pagination
const PaginationControls = ({
  gotoPage,
  canPreviousPage,
  previousPage,
  nextPage,
  canNextPage,
  pageCount,
  pageIndex,
  pageOptions,
  pageSize,
  setPageSize,
}: controlProps): React.ReactElement => {
  return (
    <div>
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {"<<"}
      </button>{" "}
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {"<"}
      </button>{" "}
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        {">"}
      </button>{" "}
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {">>"}
      </button>{" "}
      <span>
        Page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{" "}
      </span>
      <select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[2, 3, 5, 7, 10].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};
