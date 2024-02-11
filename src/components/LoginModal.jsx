import React, { useRef, useState } from "react";
import { Modal, Button, Placeholder, InputGroup, Input } from "rsuite";
import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { auth } from "../../firebase.config";
import { ToastContainer, toast } from "react-toastify";
import { USER_SIGNUP, signUpUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import Loading from "./Loader";
import { useNavigate } from "react-router-dom";
const LoginModal = ({ open, backdrop, handleClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (isSignUp) {
      try {
        dispatch({ type: "LOAD_TRUE" });
        let data = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        if (data?.user?.email) {
          dispatch(signUpUser(USER_SIGNUP, data));
          email.current = null;
          password.current = null;
          handleClose();
          navigate("/dashboard");
        }
        dispatch({ type: "LOAD_FALSE" });
      } catch (error) {
        dispatch({ type: "LOAD_FALSE" });
        toast(error.message);
      }
    } else {
      try {
        dispatch({ type: "LOAD_TRUE" });
        let data = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        console.log("login", data);
        if (data?.user?.email) {
          dispatch(signUpUser(USER_SIGNUP, data));
          email.current = null;
          password.current = null;
          handleClose();
          navigate("/dashboard");
        }
        dispatch({ type: "LOAD_FALSE" });
      } catch (error) {
        dispatch({ type: "LOAD_FALSE" });
        toast(error.message);
      }
    }
  };

  return (
    <div>
      <Modal
        backdrop={backdrop}
        keyboard={false}
        open={open}
        size={"xs"}
        onClose={handleClose}
      >
        <Modal.Header>
          <Modal.Title>
            {isSignUp ? "Signup" : "Login"} your AR Pay account{" "}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleLogin}>
            <Input
              ref={email}
              placeholder="Email"
              className="input"
              type={"email"}
            />

            <Input
              ref={password}
              placeholder="Password"
              className="input"
              type={"password"}
            />
            <Button
              type="submit"
              appearance="primary"
              style={{ height: "40px", width: "80px", fontSize: "17px" }}
            >
              {isSignUp ? "Signup" : "Login"}
            </Button>
          </form>
          <p className="signup-message">
            {isSignUp ? "Already have an account ?" : "  Don't have accout ?"}
            <Button
              className="signup-message-link"
              appearance="link"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {!isSignUp ? "Signup" : "Login"}
            </Button>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LoginModal;
