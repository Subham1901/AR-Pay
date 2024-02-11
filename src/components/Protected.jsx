import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase.config";
import { jwtDecode } from "jwt-decode";

const Protected = (props) => {
  let currentUser;
  (function decodeToken() {
    try {
      currentUser = jwtDecode(
        JSON.parse(localStorage.getItem("token"))?.accessToken
      );
      currentUser = currentUser?.email;
    } catch (error) {
      currentUser = null;
    }
  })();

  return currentUser ? props.children : <Navigate to="/" />;
};

export default Protected;
