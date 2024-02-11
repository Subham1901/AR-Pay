import { Sidenav, Nav, Sidebar, Container } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import CharacterAuthorizeIcon from "@rsuite/icons/CharacterAuthorize";
import React from "react";
import { IoMdHome } from "react-icons/io";
import MemberIcon from "@rsuite/icons/Member";
import LoginModal from "./LoginModal";
import Layout from "./Content";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Brand from "./Brand";
import { USER_LOGOUT } from "../redux/actions";
const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [backdrop, setBackdrop] = React.useState("static");
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
  console.log(userAuth);
  return (
    <Container>
      <Sidebar
        style={{ display: "flex", flexDirection: "column" }}
        width={expand ? 260 : 56}
        collapsible
      >
        <Sidenav>
          <Sidenav.Header>
            <Brand />
          </Sidenav.Header>
          <Sidenav.Body>
            <Nav activeKey="1" className="navbar">
              <Nav.Item
                onClick={() => navigate("/dashboard")}
                icon={<DashboardIcon />}
              >
                Dashboard
              </Nav.Item>

              <Nav.Menu title="Profile" icon={<MemberIcon />}>
                {userAuth ? (
                  <>
                    <Nav.Item>Account</Nav.Item>
                    <Nav.Item>Settings</Nav.Item>
                    <Nav.Item
                      as={"button"}
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        color: "white",
                        backgroundColor: "#D70040",
                        textAlign: "left",
                      }}
                      onClick={() => handleLogOut()}
                    >
                      Logout
                    </Nav.Item>
                  </>
                ) : (
                  <Nav.Item onClick={handleOpen} eventKey="3-1">
                    Login/Signup
                  </Nav.Item>
                )}
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>

        <LoginModal open={open} backdrop={backdrop} handleClose={handleClose} />
      </Sidebar>
      <Layout />
    </Container>
  );
};

export default NavBar;
