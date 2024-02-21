import React, { useEffect, useState } from "react";
import { useDecodeToken } from "../utils/util";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { USER_LOGOUT } from "../redux/actions";
import { toast } from "react-toastify";
import { auth } from "../../firebase.config";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import gateway from "../assets/gateway.webp";
import invoice from "../assets/invoice.png";
import payment from "../assets/payment.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LoginBox from "../components/LoginBox";
const LandingPage = () => {
  const tokenDetails = useDecodeToken(
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

  const handleTokenExpirtaion = () => {
    if (tokenDetails?.exp) {
      if (tokenDetails?.exp * 1000 <= Date.now()) {
        handleLogOut();
      }
    }
  };

  useEffect(() => {
    handleTokenExpirtaion();
  }, []);

  return (
    <>
      <div className="landingpage">
        <svg
          id="wave"
          style={{ transform: "rotate(180deg)", transition: "0.3s" }}
          viewBox="0 0 1440 330"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}>
              <stop stopColor="rgba(39.214, 62.809, 146.034, 1)" offset="0%" />
              <stop stopColor="rgba(28.163, 247.316, 255, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,198L26.7,209C53.3,220,107,242,160,247.5C213.3,253,267,242,320,225.5C373.3,209,427,187,480,165C533.3,143,587,121,640,110C693.3,99,747,99,800,110C853.3,121,907,143,960,165C1013.3,187,1067,209,1120,203.5C1173.3,198,1227,165,1280,159.5C1333.3,154,1387,176,1440,203.5C1493.3,231,1547,264,1600,264C1653.3,264,1707,231,1760,187C1813.3,143,1867,88,1920,88C1973.3,88,2027,143,2080,176C2133.3,209,2187,220,2240,231C2293.3,242,2347,253,2400,214.5C2453.3,176,2507,88,2560,93.5C2613.3,99,2667,198,2720,220C2773.3,242,2827,187,2880,165C2933.3,143,2987,154,3040,159.5C3093.3,165,3147,165,3200,159.5C3253.3,154,3307,143,3360,132C3413.3,121,3467,110,3520,104.5C3573.3,99,3627,99,3680,93.5C3733.3,88,3787,77,3813,71.5L3840,66L3840,330L3813.3,330C3786.7,330,3733,330,3680,330C3626.7,330,3573,330,3520,330C3466.7,330,3413,330,3360,330C3306.7,330,3253,330,3200,330C3146.7,330,3093,330,3040,330C2986.7,330,2933,330,2880,330C2826.7,330,2773,330,2720,330C2666.7,330,2613,330,2560,330C2506.7,330,2453,330,2400,330C2346.7,330,2293,330,2240,330C2186.7,330,2133,330,2080,330C2026.7,330,1973,330,1920,330C1866.7,330,1813,330,1760,330C1706.7,330,1653,330,1600,330C1546.7,330,1493,330,1440,330C1386.7,330,1333,330,1280,330C1226.7,330,1173,330,1120,330C1066.7,330,1013,330,960,330C906.7,330,853,330,800,330C746.7,330,693,330,640,330C586.7,330,533,330,480,330C426.7,330,373,330,320,330C266.7,330,213,330,160,330C106.7,330,53,330,27,330L0,330Z"
          />
        </svg>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            flexDirection={"column"}
          >
            <Typography
              color={"black"}
              fontSize={70}
              fontWeight={900}
              sx={{ transform: "scaleY(1.2)" }}
            >
              Accounts
            </Typography>
            <Typography
              color={"black"}
              fontSize={70}
              fontWeight={900}
              sx={{ transform: "scaleY(1.2)" }}
            >
              Receivable
            </Typography>

            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: 2,
                }}
              >
                <img className="flow" src={payment} />
                <Typography fontSize={17} fontWeight={600} color={"black"}>
                  AR Items
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: 2,
                }}
              >
                <img className="flow" src={gateway} />
                <Typography fontSize={17} fontWeight={600} color={"black"}>
                  Payment Gateway
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: 2,
                }}
              >
                <img className="flow" src={invoice} />
                <Typography fontSize={17} fontWeight={600} color={"black"}>
                  Invoice
                </Typography>
              </Box>
            </Box>
          </Box>

          <div className="button-group">
            {tokenDetails ? (
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
              <LoginBox />
            )}
          </div>
        </Box>
      </div>
      <Box className="footer">
        <Box
          className="footer-container"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            color={"gray"}
            fontWeight={"600"}
            fontSize={18}
          >
            Build By Subham{" "}
          </Typography>
          <IconButton
            onClick={() =>
              window.open("https://github.com/subham1901", "_blank")
            }
            sx={{
              bgcolor: "gray",
              height: 30,
              width: 30,
              p: 0,
              ml: 2,
              "&:hover": {
                bgcolor: "black",
              },
            }}
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default LandingPage;
