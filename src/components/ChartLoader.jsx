import { Box, Skeleton } from "@mui/material";
import React from "react";

const ChartLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Box>
        <Skeleton animation="wave" sx={{ height: 400, width: 450 }} />
      </Box>
      <Box>
        <Skeleton animation="wave" sx={{ height: 400, width: 450 }} />
      </Box>
    </Box>
  );
};

export default ChartLoader;
