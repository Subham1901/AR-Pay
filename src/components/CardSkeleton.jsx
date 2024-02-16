import { Skeleton, Stack } from "@mui/material";
import React from "react";

const CardSkeleton = () => {
  return (
    <Stack direction={"row"}>
      {[...Array(6)].map((data, index) => (
        <Skeleton
          key={index}
          animation="wave"
          variant="rectangular"
          width={220}
          sx={{ m: 2 }}
          height={120}
        />
      ))}
    </Stack>
  );
};

export default CardSkeleton;
