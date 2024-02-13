import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../css/loader.css";
const Loading = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", position: "relative" }}>
      <div class="loader">
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
      </div>
    </Box>
  );
};

export default Loading;
