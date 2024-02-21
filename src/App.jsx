import React, { Suspense, useState } from "react";
import Loading from "./components/Loader";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Protected from "./components/Protected";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentError from "./pages/PaymentError";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import MobileViewRestrict from "./components/MobileViewRestrict";
import { lazy } from "react";
import TableSkeleton from "./components/TableSkeleton";

const Statistics = lazy(() => import("./pages/Statistics"));
const Account = lazy(() => import("./pages/Account"));
const DashBoard = lazy(() => import("./pages/DashBoard"));
const About = lazy(() => import("./pages/About"));
const PaymentHistory = lazy(() => import("./pages/PaymentHistory"));

const App = () => {
  const load = useSelector((state) => state.action?.loading);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)"); // Adjust the breakpoint as needed

    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
    };

    mobileMediaQuery.addEventListener("change", handleMobileChange);
    setIsMobile(mobileMediaQuery.matches);

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMobileChange);
    };
  }, []);
  useEffect(() => {
    if (isMobile) {
      handleOpen();
    }
  }, [isMobile]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = React.useCallback(() => {
    setOpen(true);
  });
  const handleClose = React.useCallback(() => {
    setOpen(false);
  });
  if (isMobile) {
    return <MobileViewRestrict open={open} handleClose={handleClose} />;
  }
  if (load) {
    return <Loading />;
  }
  return (
    <div>
      <LandingPage />
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
        <Suspense fallback={<TableSkeleton />}>
          <DashBoard />
        </Suspense>
      </Protected>
    ),
    children: [
      {
        path: "statistics",

        element: (
          <Suspense fallback={<TableSkeleton />}>
            <Statistics />
          </Suspense>
        ),
      },
      {
        path: "account",
        element: (
          <Suspense fallback={<TableSkeleton />}>
            <Account />
          </Suspense>
        ),
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
        element: (
          <Suspense fallback={<TableSkeleton />}>
            <PaymentHistory />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<TableSkeleton />}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
]);
export default App;
