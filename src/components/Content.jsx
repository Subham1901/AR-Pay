import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import TableGrid from "./TableGrid";
import { Box, Toolbar } from "@mui/material";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <Box>
      <Toolbar />
      {pathname === "/dashboard" ? <TableGrid /> : <Outlet />}
    </Box>
  );
};

export default Layout;
