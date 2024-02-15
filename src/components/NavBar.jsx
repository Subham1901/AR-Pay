import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { signOut } from "firebase/auth";
import { USER_LOGOUT } from "../redux/actions";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "./Content";
import LoginModal from "./LoginModal";
import { auth } from "../../firebase.config";
import Brand from "./Brand";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
const drawerWidth = 240;

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [expand, setExpand] = React.useState(true);
  const [token] = React.useState(
    JSON.parse(localStorage.getItem("token"))?.accessToken
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    try {
      await signOut(auth);
      dispatch({ type: USER_LOGOUT });
      navigate("/");
    } catch (error) {
      toast(error.message);
    }
  };

  const {
    auth: { userAuth },
  } = useSelector((state) => state);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          bgcolor: "black",
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Brand />
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />

        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/dashboard")}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("statistics")}>
              <ListItemIcon>
                <EqualizerIcon />
              </ListItemIcon>
              <ListItemText>Statistics</ListItemText>
            </ListItemButton>
          </ListItem>

          {userAuth ? (
            <>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate("account")}>
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText>Account</ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ color: "#cd5c5c" }}
                  onClick={() => handleLogOut()}
                >
                  <ListItemIcon>
                    <PowerSettingsNewIcon />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <ListItem disablePadding>
              <ListItemButton onClick={handleOpen}>
                <ListItemText>Login/Signup</ListItemText>
              </ListItemButton>
            </ListItem>
          )}
        </List>
        {/* <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Layout />
      <LoginModal open={open} handleClose={handleClose} />
    </Box>
  );
}
