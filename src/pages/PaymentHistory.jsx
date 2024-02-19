import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { paymentHistoryColumns } from "../utils/util";
import { getPaymentHistory } from "../api";
import { toast } from "react-toastify";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export default function PaymentHistory() {
  const [paymentHistoryData, setPaymentHistoryData] = React.useState(null);

  const fetchPaymentHistory = async () => {
    await getPaymentHistory((err, data) => {
      if (err) toast.error(err);

      setPaymentHistoryData(data);
    });
  };
  React.useEffect(() => {
    fetchPaymentHistory();
  }, []);

  return (
    <Box
      sx={{
        height: 800,
        width: "100%",

        "& .cell-green": {
          backgroundColor: "rgb(0, 163, 108)",
          color: "white",
          fontWeight: "600",
        },
        "& .cell-red": {
          backgroundColor: "rgb(210, 4, 45)",
          color: "white",
          fontWeight: "600",
        },
      }}
    >
      {paymentHistoryData && (
        <DataGrid
          getRowId={(row) => row.session_id}
          rows={paymentHistoryData}
          columns={paymentHistoryColumns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 7 },
            },
          }}
        />
      )}
    </Box>
  );
}
