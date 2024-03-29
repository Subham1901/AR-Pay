import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { USER_LOGIN, USER_SIGNUP, signUpUser } from "../redux/actions";
import {
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
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase.config";
import CloseIcon from "@mui/icons-material/Close";
import { buttonStyle } from "../utils/util";

export default function LoginBox() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [authDetails, setAuthDetails] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    if (isSignUp) {
      try {
        dispatch({ type: "LOAD_TRUE" });
        let data = await createUserWithEmailAndPassword(
          auth,
          authDetails.email,
          authDetails.password
        );

        if (data?.user?.email) {
          dispatch(signUpUser(USER_SIGNUP, data));
          setAuthDetails({ ...authDetails, email: "", password: "" });

          navigate("/dashboard");
        }
        dispatch({ type: "LOAD_FALSE" });
      } catch (error) {
        dispatch({ type: "LOAD_FALSE" });
        toast.error(error.message);
      }
    } else {
      try {
        dispatch({ type: "LOAD_TRUE" });
        let data = await signInWithEmailAndPassword(
          auth,
          authDetails.email,
          authDetails.password
        );
        console.log("login", data);
        if (data?.user?.email) {
          dispatch(signUpUser(USER_LOGIN, data));
          setAuthDetails({ ...authDetails, email: "", password: "" });

          navigate("/dashboard");
        }
        dispatch({ type: "LOAD_FALSE" });
      } catch (error) {
        dispatch({ type: "LOAD_FALSE" });
        toast.error(error.message);
      }
    }
  };

  return (
    <Box className="login-box" sx={{ bgcolor: "black", p: 4, borderRadius: 5 }}>
      <Typography sx={{ p: 1, fontSize: 25, fontWeight: 600 }}>
        {isSignUp ? "Signup" : "Login"} your AR Pay Account
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleLogin}>
          <Box>
            <TextField
              variant="standard"
              sx={{
                width: 400,
                mb: 3,
              }}
              onChange={() =>
                setAuthDetails({ ...authDetails, email: event.target.value })
              }
              placeholder="Email"
              className="input"
              type={"email"}
            />
          </Box>

          <TextField
            variant="standard"
            sx={{ width: 400 }}
            onChange={() =>
              setAuthDetails({
                ...authDetails,
                password: event.target.value,
              })
            }
            placeholder="Password"
            className="input"
            type={"password"}
          />
          <Box>
            <Button
              fullWidth
              variant="contained"
              style={buttonStyle}
              type="submit"
            >
              {isSignUp ? "Signup" : "Login"}
            </Button>
          </Box>
        </form>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography className="signup-message" sx={{ p: 2 }}>
          {isSignUp ? "Already have an account ?" : "  Don't have accout ?"}
          <Button
            variant="text"
            className="signup-message-link"
            appearance="link"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {!isSignUp ? "Signup" : "Login"}
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}
