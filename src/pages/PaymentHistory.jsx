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
import { Box, Typography } from "@mui/material";
import TableSkeleton from "../components/TableSkeleton";

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
        height: 650,
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
      <Typography
        fontSize={30}
        textAlign={"center"}
        fontWeight={"600"}
        color={"#34c3ff"}
      >
        Payment History
      </Typography>
      {paymentHistoryData ? (
        <DataGrid
          getRowId={(row) => row.session_id}
          rows={paymentHistoryData}
          columns={paymentHistoryColumns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
        />
      ) : (
        <TableSkeleton />
      )}
    </Box>
  );
}
