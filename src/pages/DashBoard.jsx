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
  const tokenDetails = useDecodeToken(
    JSON.parse(localStorage.getItem("token"))?.accessToken
  );
  const navigate = useNavigate();

  //auto logout handle
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

  const authState = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        handleTokenExpirtaion();
        dispatch({ type: "AUTH_STATE_CHANGE", payload: auth?.currentUser });
      } else {
        handleLogOut();
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
