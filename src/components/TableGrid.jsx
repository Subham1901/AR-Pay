import React from "react";
import { columns, invoiceData } from "../utils/util";
import AdvanceSearch from "./AdvanceSearch";
import DataTable from "./DataTable";

const TableGrid = () => {
  return (
    <>
      {/* <div className="advance-search">
        <AdvanceSearch />
      </div> */}

      {/* <DataTable
          theme="dark"
          fixedHeader
          selectableRows
          pagination
          paginationRowsPerPageOptions={[10]}
          columns={columns}
          data={invoiceData.invoices.data}
        /> */}
      <DataTable />
    </>
  );
};

export default TableGrid;
