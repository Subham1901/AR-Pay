import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, invoiceData } from "../utils/util";
import { Box } from "@mui/material";
import AdvanceSearch from "./AdvanceSearch";

export default function DataTable() {
  const [selectedRows, setSelectedRows] = React.useState([]);

  return (
    <Box>
      <Box>
        <AdvanceSearch />
      </Box>
      <Box style={{ height: 500, width: "100%" }}>
        <DataGrid
          getRowId={(row) => row.invoiceNumber}
          rows={invoiceData?.invoices?.data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 7 },
            },
          }}
          onRowSelectionModelChange={(row) => {
            setSelectedRows(row);
          }}
          checkboxSelection
          rowSelectionModel={selectedRows}
        />
      </Box>
    </Box>
  );
}
