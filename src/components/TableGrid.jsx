import React, { useEffect, useState } from "react";
import { columns } from "../utils/util";
import AdvanceSearch from "./AdvanceSearch";
import DataTable from "./DataTable";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PaymentIcon from "@mui/icons-material/Payment";
import ShowItemDetails from "./ShowItemDetails";
const TableGrid = ({ invoices, init }) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [disableShow, setDisableShow] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          mb: 2,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => init()}
          className="icons"
          variant="outlined"
          startIcon={<RefreshIcon />}
        >
          Refresh
        </Button>
        <Button
          className="icons"
          startIcon={<VisibilityIcon />}
          variant="outlined"
          onClick={() => handleClickOpen()}
          disabled={selectedRows.length === 1 ? false : true}
        >
          Show
        </Button>
        <Button
          className="icons"
          startIcon={<PaymentIcon />}
          variant="outlined"
        >
          Pay
        </Button>
      </Box>
      {invoices && (
        <DataGrid
          getRowId={(row) => row.invoiceNumber}
          rows={invoices}
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
      )}

      <ShowItemDetails
        invoiceNumber={selectedRows[0]}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default TableGrid;
