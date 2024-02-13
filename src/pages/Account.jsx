import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import useAuthState from "../hooks/useAuthState";
import { auth } from "../../firebase.config";
import AccountEditModal from "../components/AccountEditModal";

const style = {
  margin: "16px",
};
const Account = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const currentUser = useAuthState(auth);
  return (
    <Container>
      <Stack direction={"row"}>
        <Stack
          padding={5}
          direction={"column"}
          width={500}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {currentUser &&
            currentUser.map((user) => (
              <>
                <Avatar
                  src={user?.photoURL}
                  sx={{ width: 150, height: 150, fontSize: "70px", m: 4 }}
                >
                  {user?.displayName || "Z"}
                </Avatar>
                <TextField
                  style={style}
                  variant="outlined"
                  label="Display Name"
                  fullWidth
                  value={user?.displayName || "NA"}
                  disabled
                />
                <TextField
                  style={style}
                  variant="outlined"
                  label="Email"
                  fullWidth
                  value={user?.email}
                  disabled
                />
                <TextField
                  style={style}
                  variant="outlined"
                  label="Phone"
                  fullWidth
                  value={user?.phoneNumber || "NA"}
                  disabled
                />
                <TextField
                  style={style}
                  variant="outlined"
                  label="Avatar URL"
                  fullWidth
                  value={user?.photoURL || "NA"}
                  disabled
                />
                <Button
                  fullWidth
                  onClick={handleOpen}
                  variant="contained"
                  color="info"
                  sx={{ fontWeight: "700", fontSize: 20 }}
                >
                  Edit
                </Button>
              </>
            ))}
        </Stack>
        <Box>
          <Divider orientation="vertical" sx={{ mt: 9 }} variant="fullWidth" />
        </Box>
      </Stack>
      <AccountEditModal open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Account;
