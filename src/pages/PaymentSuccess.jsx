import { Typography } from "@mui/material";
import React, { useState } from "react";
import PaymentStatus from "../components/PaymentStatus";
import { useSearchParams } from "react-router-dom";
import { getSessionInfo, updatePaymentStatus } from "../api";
import { toast } from "react-toastify";

const PaymentSuccess = () => {
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

  const updateSuccessStatus = async () => {
    await updatePaymentStatus(
      { invoice: query.get("invoice") },
      (err, data, status) => {
        if (err) toast.error(err);
      }
    );
  };

  React.useEffect(() => {
    handleOpen();
  }, []);
  React.useEffect(() => {
    retriveData();
  }, []);
  React.useEffect(() => {
    updateSuccessStatus();
  }, []);
  return (
    <div>
      <Typography>Success</Typography>
      <PaymentStatus
        open={open}
        handleClose={handleClose}
        status={"success"}
        sessionInfo={sessionInfo}
      />
    </div>
  );
};

export default PaymentSuccess;
