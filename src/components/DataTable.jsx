import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "../utils/util";
import { Box, Button, Typography } from "@mui/material";
import AdvanceSearch from "./AdvanceSearch";
import { getInvoices } from "../api";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import TableGrid from "./TableGrid";
import TableSkeleton from "./TableSkeleton";
import Fab from "@mui/material/Fab";
import RefreshIcon from "@mui/icons-material/Refresh";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PaymentIcon from "@mui/icons-material/Payment";
export default function DataTable() {
  const dispatch = useDispatch();
  const init = React.useCallback(async () => {
    dispatch({ type: "LOADING_TRUE" });
    await getInvoices((err, data) => {
      if (err) {
        toast.error(err);
        dispatch({ type: "ERROR", payload: err });
        dispatch({ type: "LOADING_FALSE" });
        return;
      }
      dispatch({ type: "GET_ALL_AR_ITEMS", payload: data });
      dispatch({ type: "LOADING_FALSE" });
    });
  }, [dispatch]);
  React.useEffect(() => {
    init();
  }, []);

  const arPayService = useSelector((state) => state?.service);

  return (
    <>
      <Box>
        <AdvanceSearch />
      </Box>
      <Box style={{ height: 500 }}>
        {arPayService?.loading ? (
          <TableSkeleton />
        ) : (
          <TableGrid
            init={init}
            invoices={
              arPayService?.searchQuery
                ? arPayService?.searchQuery
                : arPayService?.invoices
            }
          />
        )}
      </Box>
    </>
  );
}
