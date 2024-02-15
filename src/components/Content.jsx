import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import TableGrid from "./TableGrid";
import { Box, Toolbar } from "@mui/material";
import DataTable from "./DataTable";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 1 }}
    >
      <Toolbar />
      {pathname === "/dashboard" ? <DataTable /> : <Outlet />}
    </Box>
  );
};

export default Layout;
