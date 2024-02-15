import { Box, Skeleton } from "@mui/material";
import React from "react";

const TableSkeleton = () => {
  return (
    <>
      <Skeleton animation="wave" sx={{ height: 85 }} />
      {[...Array(10).keys()].map((data, index) => (
        <Box key={index}>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Box>
      ))}
    </>
  );
};

export default TableSkeleton;
