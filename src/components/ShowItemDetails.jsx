import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector } from "react-redux";
import {
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
function ShowItemDetails({ invoiceNumber, open, handleClose }) {
  const invoices = useSelector(
    (state) => state?.service?.invoices?.invoices?.data
  );

  const filterInvoice =
    invoices &&
    invoices.filter((inv) => inv.invoiceNumber === invoiceNumber)[0];
  const itemCells = [
    "Title",
    "Description",
    "Currency",
    "Quantity",
    "Gross Weight",
    "Net Weight",
    "Unit of Weight",
    "Net Cost",
    "Total Cost",
  ];

  const style = {
    color: "gray",
    fontWeight: 700,
  };

  return (
    <>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <DialogTitle sx={{ fontSize: 30 }}>{invoiceNumber}</DialogTitle>
        <DialogContent>
          <Box mt={2}>
            <Typography mb={2} variant="h5">
              Invoice Header
            </Typography>

            <TextField
              className="header"
              defaultValue={filterInvoice?.invoiceNumber}
              disabled
              label="Invoice Number"
            />
            <TextField
              className="header"
              defaultValue={filterInvoice?.amount}
              disabled
              label="Amount"
            />
            <TextField
              className="header"
              label="Invoice Date"
              variant="outlined"
              disabled
              defaultValue={filterInvoice?.invoiceDate}
            />
            <TextField
              className="header"
              label="Due Date"
              variant="outlined"
              disabled
              defaultValue={filterInvoice?.dueDate}
            />
            <TextField
              className="header"
              label="Currency"
              variant="outlined"
              disabled
              defaultValue={filterInvoice?.currency}
            />
          </Box>

          <Box mt={2}>
            <Typography mb={2} variant="h5">
              Bill To
            </Typography>

            <TextField
              className="header"
              defaultValue={filterInvoice?.contact?.company}
              disabled
              label="Company"
            />
            <TextField
              className="header"
              label="Customer Number"
              variant="outlined"
              disabled
              defaultValue={filterInvoice?.contact?.customer}
            />
            <TextField
              className="header"
              label="Customer Name"
              variant="outlined"
              disabled
              defaultValue={
                filterInvoice?.contact?.firstName +
                " " +
                filterInvoice?.contact?.firstName
              }
            />
            <TextField
              className="header"
              label="Email"
              variant="outlined"
              disabled
              defaultValue={filterInvoice?.contact?.email}
            />
            <TextField
              className="header"
              label="Country"
              variant="outlined"
              disabled
              defaultValue={filterInvoice?.contact?.country}
            />
            <TextField
              className="header"
              label="City"
              variant="outlined"
              disabled
              defaultValue={filterInvoice?.contact?.city}
            />
            <TextField
              className="header"
              label="Address"
              variant="outlined"
              disabled
              defaultValue={filterInvoice?.contact?.address}
            />
            <TextField
              className="header"
              label="Zip"
              variant="outlined"
              disabled
              defaultValue={filterInvoice?.contact?.zipCode}
            />
            <TextField
              className="header"
              label="Phone"
              variant="outlined"
              disabled
              defaultValue={filterInvoice?.contact?.phone}
            />
          </Box>

          <Box mt={2}>
            <Typography mb={2} variant="h5">
              Item Details
            </Typography>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {itemCells.map((cell) => (
                      <TableCell key={cell}>{cell}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Array.isArray(filterInvoice?.itemData?.items) ? (
                    filterInvoice?.itemData?.items?.map((item) => (
                      <TableRow>
                        <TableCell sx={style}>{item?.title}</TableCell>
                        <TableCell sx={style}>{item?.description}</TableCell>
                        <TableCell sx={style}>{item?.currency}</TableCell>
                        <TableCell sx={style}>{item?.quantity}</TableCell>
                        <TableCell sx={style}>{item?.grossWeight}</TableCell>
                        <TableCell sx={style}>{item?.netWeight}</TableCell>
                        <TableCell sx={style}>{item?.unitOfWeight}</TableCell>
                        <TableCell sx={style}>{item?.netCostItem}</TableCell>
                        <TableCell sx={style}>{item?.totalCost}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell sx={style}>
                        {filterInvoice?.itemData?.items?.title}
                      </TableCell>
                      <TableCell sx={style}>
                        {filterInvoice?.itemData?.items?.description}
                      </TableCell>
                      <TableCell sx={style}>
                        {filterInvoice?.itemData?.items?.currency}
                      </TableCell>
                      <TableCell sx={style}>
                        {filterInvoice?.itemData?.items?.quantity}
                      </TableCell>
                      <TableCell sx={style}>
                        {filterInvoice?.itemData?.items?.grossWeight}
                      </TableCell>
                      <TableCell sx={style}>
                        {filterInvoice?.itemData?.items?.netWeight}
                      </TableCell>
                      <TableCell sx={style}>
                        {filterInvoice?.itemData?.items?.unitOfWeight}
                      </TableCell>
                      <TableCell sx={style}>
                        {filterInvoice?.itemData?.items?.netCostItem}
                      </TableCell>
                      <TableCell sx={style}>
                        {filterInvoice?.itemData?.items?.totalCost}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default React.memo(ShowItemDetails);
