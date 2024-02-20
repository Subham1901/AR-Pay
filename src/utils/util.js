import { createTheme } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import clsx from "clsx";
import moment from "moment";
// import createTheme from "@mui/material/styles/createTheme";
export const useDecodeToken = (token) => {
  if (token) {
    let { email, uid, exp } = jwtDecode(token);
    return { email, uid, exp };
  }
};
export const summaryItems = [
  { header: "Total Amount", value: "totalAmount" },
  { header: "Total Customers", value: "totalCustomers" },
  { header: "Total AR Items", value: "totalARItems" },
  { header: "Total Paid AR Items", value: "totalPaidData" },
  { header: "Due Date Passed Items", value: "totalDueInvoices" },
  { header: "Upcoming Due Date Items", value: "comingDueDateInvoices" },
];
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export const buttonStyle = {
  backgroundColor: "#34c3ff",
  color: "white",
  fontWeight: 700,
};
export const columns = [
  {
    headerName: "Invoice Number",
    field: "invoiceNumber",
    width: 120,
  },
  {
    headerName: "Invoice Date",
    field: "invoiceDate",
    width: 120,
  },
  {
    headerName: "Due Date",
    field: "dueDate",
    width: 120,
  },
  {
    headerName: "Amount",
    field: "amount",
    width: 120,
  },
  {
    headerName: "Customer",
    field: "customer",
    valueGetter: (params) => params?.row?.contact?.customer,
    width: 80,
  },
  {
    headerName: "First Name",
    field: "firstName",
    valueGetter: (params) => params?.row?.contact?.firstName,
    width: 120,
  },
  {
    headerName: "Last Name",
    field: "lastName",
    valueGetter: (params) => params?.row?.contact?.lastName,
    width: 120,
  },
  {
    headerName: "Email",
    field: "email",
    valueGetter: (params) => params?.row?.contact?.email,
    width: 120,
  },
  {
    headerName: "Country",
    field: "country",
    valueGetter: (params) => params?.row?.contact?.country,
    width: 130,
  },
  {
    headerName: "City",
    field: "city",
    valueGetter: (params) => params?.row?.contact?.city,
    width: 130,
  },
  {
    headerName: "Address",
    field: "address",
    valueGetter: (params) => params?.row?.contact?.address,
    width: 200,
  },
  {
    headerName: "Zip",
    field: "zipCode",
    valueGetter: (params) => params?.row?.contact?.zipCode,
    width: 80,
  },
  {
    headerName: "Phone",
    field: "phone",
    valueGetter: (params) => params?.row?.contact?.phone,
    width: 140,
  },
];

export const paymentHistoryColumns = [
  { headerName: "Invoice Number", field: "pk_invoice_number", width: 120 },
  { headerName: "Currency", field: "currency", width: 60 },
  {
    headerName: "Amount",
    field: "amount",
    width: 100,
    valueGetter: (params) => formatValue(params?.row?.amount),
  },
  {
    headerName: "Status",
    field: "status",
    width: 120,
    cellClassName: (params) => {
      if (params.value === "complete") {
        return clsx("cell-green");
      } else {
        return clsx("cell-red");
      }
    },
  },
  { headerName: "Payment Status", field: "payment_status", width: 120 },
  { headerName: "Payment Method", field: "payment_method", width: 140 },
  {
    headerName: "Created Date",
    field: "created_date",
    width: 120,
    valueGetter: (params) => moment(params.created_date).format("YYYY-MM-DD"),
  },
  { headerName: "Created Time", field: "created_time", width: 120 },
  { headerName: "Payment Intent", field: "payment_intent", width: 180 },
  { headerName: "Session ID", field: "session_id", width: 300 },
  { headerName: "Customer", field: "customer", width: 80 },
  { headerName: "Email", field: "email", width: 100 },
];

const formatValue = (amount) => {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "usd",
  });
};
