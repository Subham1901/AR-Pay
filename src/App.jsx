import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { USER_LOGOUT } from "./redux/actions";
import { auth } from "../firebase.config";
import Loading from "./components/Loader";
import {
  Navigate,
  Outlet,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import LandingPage from "./pages/LandingPage";
import Protected from "./components/Protected";
import Account from "./pages/Account";
import Statistics from "./pages/Statistics";
import LoginModal from "./components/LoginModal";
import { jwtDecode } from "jwt-decode";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentError from "./pages/PaymentError";
import PaymentHistory from "./pages/PaymentHistory";

const App = () => {
  const load = useSelector((state) => state.action?.loading);

  if (load) {
    return <Loading />;
  }
  return (
    <div>
      <LandingPage />
      <LoginModal />
    </div>
  );
};
export const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: (
      <Protected>
        <DashBoard />
      </Protected>
    ),
    children: [
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "success",
        element: <PaymentSuccess />,
      },
      {
        path: "paymenterror",
        element: <PaymentError />,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory />,
      },
    ],
  },
]);
export default App;
