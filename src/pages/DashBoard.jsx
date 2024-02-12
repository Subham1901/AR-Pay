import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.config";
import TableGrid from "../components/TableGrid";

const DashBoard = () => {
  const dispatch = useDispatch();
  const authState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "AUTH_STATE_CHANGE", payload: auth?.currentUser });
      } else {
        dispatch({ type: USER_LOGOUT });
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
