import { createTheme } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import createTheme from "@mui/material/styles/createTheme";
export const useDecodeToken = () => {
  let token = JSON.parse(localStorage.getItem("token"))?.accessToken;

  if (token) {
    let { email, uid } = jwtDecode(token);
    return { email, uid };
  }
};
export const summaryItems = [
  { header: "Total Amount", value: "totalAmount" },
  { header: "Total Customers", value: "totalARItems" },
  { header: "Total AR Items", value: "totalCustomers" },
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
