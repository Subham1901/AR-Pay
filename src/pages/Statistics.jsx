import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { getSummaryAR } from "../api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Summary from "../components/Summary";

const Statistics = () => {
  const dispatch = useDispatch();
  const init = async () => {
    dispatch({ type: "LOADING_TRUE" });
    await getSummaryAR((err, data) => {
      if (err) {
        toast.error(err);
        dispatch({ type: "LOADING_FALSE" });
      } else {
        dispatch({ type: "GET_SUMMARY", payload: data });
        dispatch({ type: "LOADING_FALSE" });
      }
    });
  };

  useEffect(() => {
    init();
  }, [dispatch]);
  return (
    <>
      <Stack padding={5} direction={"row"}>
        <Summary />
      </Stack>
    </>
  );
};

export default Statistics;
