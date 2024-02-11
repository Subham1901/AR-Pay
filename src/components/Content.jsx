import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
