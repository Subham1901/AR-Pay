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
import { useSelector } from "react-redux";
import { doPayment } from "../api";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
const TableGrid = ({ invoices, init }) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [disableShow, setDisableShow] = useState(true);

  const handleClickOpen = React.useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  const makePayment = async () => {
    //get the product details
    const products =
      invoices &&
      invoices.filter((inv) => inv.invoiceNumber === selectedRows[0])[0];

    console.log(products);
    const stripe = await loadStripe(
      import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
    );
    await doPayment(products, async (err, session) => {
      if (err) toast.error(err);
      //redirect to checkout section
      console.log(session);
      //checkout session
      await stripe.redirectToCheckout({
        sessionId: session?.sessionId,
      });
    });
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
          type="submit"
          className="icons"
          startIcon={<PaymentIcon />}
          variant="outlined"
          onClick={() => makePayment()}
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
