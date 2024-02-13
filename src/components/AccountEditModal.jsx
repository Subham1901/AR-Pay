import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Input,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AccountEditModal = ({ open, handleClose }) => {
  const [updateInfo, setUpdateInfo] = useState({
    displayName: "",
    photoURL: "",
  });
  const handleUpdateUserProfile = async (event) => {
    event.preventDefault();
    if (updateInfo?.displayName === "" && updateInfo?.photoURL === "") {
      toast.error("Please fill at least one property");
      return;
    }
    try {
      await updateProfile(auth?.currentUser, updateInfo);
      toast.success("Profie updated successfully");
      handleClose();
      setUpdateInfo({ ...updateInfo, displayName: "", photoURL: "" });
    } catch (error) {
      toast.error(error.message);
      handleClose();
    }
  };
  return (
    <BootstrapDialog open={open}>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Edit Your Account
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleUpdateUserProfile}>
            <Box>
              <TextField
                onChange={() =>
                  setUpdateInfo({
                    ...updateInfo,
                    displayName: event.target.value,
                  })
                }
                variant="standard"
                sx={{
                  width: 400,
                  mb: 3,
                }}
                placeholder="Display Name - John Doe"
                className="input"
                type={"text"}
              />
            </Box>

            <TextField
              onChange={() =>
                setUpdateInfo({
                  ...updateInfo,
                  photoURL: event.target.value,
                })
              }
              variant="standard"
              sx={{ width: 400 }}
              placeholder="Image URL"
              className="input"
              type={"text"}
            />
            <Box>
              <Button fullWidth variant="contained" type="submit">
                Update
              </Button>
            </Box>
          </form>
        </Box>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default AccountEditModal;
