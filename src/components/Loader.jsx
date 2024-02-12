import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Loading = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <CircularProgress
        size={"xl"}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />
    </Box>
  );
};

export default Loading;
