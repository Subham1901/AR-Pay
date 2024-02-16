import { Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { summaryItems } from "../utils/util";
import CardSkeleton from "./CardSkeleton";

const Summary = () => {
  const summaryData = useSelector((state) => state?.service?.summary);
  return (
    <>
      {summaryData ? (
        summaryItems.map((items) => (
          <Card sx={{ maxWidth: 345, m: 2 }} key={items.value}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                color="text.secondary"
                fontWeight={800}
                component="div"
              >
                {items.header}
              </Typography>
              {items.icon}
              <Divider />
              <Typography
                fontSize={20}
                mt={2}
                variant="body1"
                color="text.secondary"
              >
                {Array.isArray(summaryData[items.value])
                  ? summaryData[items.value].length
                  : summaryData[items.value]}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <CardSkeleton />
      )}
    </>
  );
};

export default Summary;
