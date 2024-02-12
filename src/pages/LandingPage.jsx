import React from "react";
import wave from "../assets/wave.png";
import Brand from "../components/Brand";
import LoginModal from "../components/LoginModal";
import { useDecodeToken } from "../utils/util";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { USER_LOGOUT } from "../redux/actions";
import { toast } from "react-toastify";
import { auth } from "../../firebase.config";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
const LandingPage = () => {
  const [open, setOpen] = React.useState(false);
  const [backdrop, setBackdrop] = React.useState("static");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const email = useDecodeToken();
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

  return (
    <div className="landingpage">
      <svg
        id="wave"
        style={{ transform: "rotate(180deg)", transition: "0.3s" }}
        viewBox="0 0 1440 300"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}>
            <stop stopColor="rgba(30.391, 18.19, 66.347, 1)" offset="0%" />
            <stop stopColor="rgba(97.978, 43.94, 111.883, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,150L48,160C96,170,192,190,288,185C384,180,480,150,576,155C672,160,768,200,864,185C960,170,1056,100,1152,65C1248,30,1344,30,1440,65C1536,100,1632,170,1728,170C1824,170,1920,100,2016,95C2112,90,2208,150,2304,165C2400,180,2496,150,2592,115C2688,80,2784,40,2880,65C2976,90,3072,180,3168,210C3264,240,3360,210,3456,205C3552,200,3648,220,3744,200C3840,180,3936,120,4032,85C4128,50,4224,40,4320,45C4416,50,4512,70,4608,105C4704,140,4800,190,4896,205C4992,220,5088,200,5184,185C5280,170,5376,160,5472,165C5568,170,5664,190,5760,175C5856,160,5952,110,6048,80C6144,50,6240,40,6336,70C6432,100,6528,170,6624,190C6720,210,6816,180,6864,165L6912,150L6912,300L6864,300C6816,300,6720,300,6624,300C6528,300,6432,300,6336,300C6240,300,6144,300,6048,300C5952,300,5856,300,5760,300C5664,300,5568,300,5472,300C5376,300,5280,300,5184,300C5088,300,4992,300,4896,300C4800,300,4704,300,4608,300C4512,300,4416,300,4320,300C4224,300,4128,300,4032,300C3936,300,3840,300,3744,300C3648,300,3552,300,3456,300C3360,300,3264,300,3168,300C3072,300,2976,300,2880,300C2784,300,2688,300,2592,300C2496,300,2400,300,2304,300C2208,300,2112,300,2016,300C1920,300,1824,300,1728,300C1632,300,1536,300,1440,300C1344,300,1248,300,1152,300C1056,300,960,300,864,300C768,300,672,300,576,300C480,300,384,300,288,300C192,300,96,300,48,300L0,300Z"
        />
      </svg>

      <div className="flex">
        <h1 className="landing-logo">AR PAY</h1>
        <p className="quote">
          Processing a AR invoice with a payment applied to it.
        </p>

        <div className="button-group">
          {email ? (
            <>
              <Button
                onClick={() => handleLogOut()}
                appearance="primary"
                className="login-button"
              >
                Logout
              </Button>
              <Link to={"/dashboard"}>
                <Button
                  sx={{
                    background: "#aa0f6a",
                    ml: 3,
                    color: "white",
                    height: 50,
                    fontWeight: 700,
                    fontSize: 20,
                    "&:hover": {
                      bgcolor: "#aa0f6a",
                    },
                  }}
                >
                  Dashboard
                </Button>
              </Link>
            </>
          ) : (
            <Button
              onClick={handleOpen}
              variant="contained"
              appearance="primary"
              className="login-button"
            >
              Login
            </Button>
          )}
        </div>
      </div>
      <LoginModal open={open} backdrop={backdrop} handleClose={handleClose} />
    </div>
  );
};

export default LandingPage;
