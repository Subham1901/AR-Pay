import { Avatar, Box, Button, Divider, Modal, Typography } from "@mui/material";
import React from "react";
import success from "../assets/paid.webp";
import error from "../assets/Error.webp";
import moment from "moment";
const PaymentStatus = ({ open, handleClose, status, sessionInfo }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
    border: "none",
    outline: "none",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Typography
            m={1}
            textAlign={"center"}
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontSize={25}
            color={status === "success" ? "green" : "red"}
            fontWeight={"700"}
          >
            Payment {status === "success" ? "Successfull" : "Failed"}
          </Typography>
          <Avatar
            src={status === "success" ? success : error}
            sx={{ width: 86, height: 86, mt: 3 }}
          />
        </Box>
        {status === "success" && (
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography
              m={2}
              textAlign={"center"}
              id="modal-modal-title"
              variant="caption"
              fontSize={15}
            >
              Thank you for completing your secure online payment.
            </Typography>
          </Box>
        )}
        <Divider sx={{ mt: 2 }} />
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"start"}
          justifyContent={"space-between"}
        >
          <Box
            color={"gray"}
            p={2}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"start"}
            justifyContent={"flex-start"}
          >
            <Typography
              textAlign={"center"}
              id="modal-modal-title"
              variant="caption"
              fontSize={15}
            >
              Amount:
            </Typography>
            <Typography
              textAlign={"center"}
              id="modal-modal-title"
              variant="caption"
              fontSize={15}
            >
              Payment Method:
            </Typography>
            <Typography
              textAlign={"center"}
              id="modal-modal-title"
              variant="caption"
              fontSize={15}
            >
              Email:
            </Typography>
            <Typography
              textAlign={"center"}
              id="modal-modal-title"
              variant="caption"
              fontSize={15}
            >
              Date:
            </Typography>
          </Box>

          <Box
            color={"gray"}
            p={2}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"end"}
            justifyContent={"flex-end"}
          >
            <Typography
              textAlign={"center"}
              id="modal-modal-title"
              variant="caption"
              fontSize={15}
            >
              {sessionInfo?.amount?.toLocaleString("en-US", {
                style: "currency",
                currency: "usd",
              })}
            </Typography>
            <Typography
              textAlign={"center"}
              id="modal-modal-title"
              variant="caption"
              fontSize={15}
            >
              {sessionInfo?.payment_method}
            </Typography>
            <Typography
              textAlign={"center"}
              id="modal-modal-title"
              variant="caption"
              fontSize={15}
            >
              {sessionInfo?.email}
            </Typography>
            <Typography
              textAlign={"center"}
              id="modal-modal-title"
              variant="caption"
              fontSize={15}
            >
              {moment(sessionInfo?.created_date).format("YYYY-MM-DD")}
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Button
            variant="contained"
            color={status === "success" ? "success" : "error"}
          >
            Payment History
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PaymentStatus;
