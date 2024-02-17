import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import TableGrid from "../components/TableGrid";
import { jwtDecode } from "jwt-decode";
import { useDecodeToken } from "../utils/util";
import { USER_LOGOUT } from "../redux/actions";

const DashBoard = () => {
  const dispatch = useDispatch();
  const data = useDecodeToken();
  const navigate = useNavigate();
  const authState = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch({ type: "AUTH_STATE_CHANGE", payload: auth?.currentUser });
      } else {
        await signOut(auth);
        dispatch({ type: USER_LOGOUT });
        navigate("/");
      }
    });
  };
  useEffect(() => {
    authState();
  }, []);

  return (
    <>
      <NavBar />
    </>
  );
};

export default DashBoard;
