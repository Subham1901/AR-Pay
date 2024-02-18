import { Typography } from "@mui/material";
import React, { useState } from "react";
import PaymentStatus from "../components/PaymentStatus";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getSessionInfo } from "../api";

const PaymentError = () => {
  const [query] = useSearchParams();
  const [open, setOpen] = React.useState(false);
  const [sessionInfo, setSessionInfo] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    setOpen(false);
  };

  const retriveData = async () => {
    await getSessionInfo({ invoice: query.get("invoice") }, (err, data) => {
      if (err) toast.error(err);
      setSessionInfo(data);
    });
  };
  React.useEffect(() => {
    handleOpen();
  }, []);
  React.useEffect(() => {
    retriveData();
  }, []);

  return (
    <div>
      <Typography>Error</Typography>
      <PaymentStatus
        open={open}
        handleClose={handleClose}
        status={"error"}
        sessionInfo={sessionInfo}
      />
    </div>
  );
};

export default PaymentError;
