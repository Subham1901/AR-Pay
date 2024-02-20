import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { getInvoiceChartData, getPaymentChartData, getSummaryAR } from "../api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Summary from "../components/Summary";
import YearWiseInvoices from "../chart/YearWiseInvoices";
import PaymentPerDay from "../chart/PaymentPerDay";

const Statistics = () => {
  const [yearWiseInvoiceData, setYearWiseInvoiceData] = useState(null);
  const [paymentPerDayData, setPaymentPerDayData] = useState(null);
  const dispatch = useDispatch();
  const init = async () => {
    dispatch({ type: "LOADING_TRUE" });
    await getSummaryAR((err, data) => {
      if (err) {
        toast.error(err);
        dispatch({ type: "LOADING_FALSE" });
      } else {
        dispatch({ type: "GET_SUMMARY", payload: data });
        getPaymentChartData((err, data) => {
          if (err) toast.error(err);
          else {
            setPaymentPerDayData(data);
            getInvoiceChartData((err, data) => {
              if (err) toast.error(err);
              else {
                setYearWiseInvoiceData(data);
              }
            });
          }
        });
        dispatch({ type: "LOADING_FALSE" });
      }
    });
  };

  useEffect(() => {
    init();
  }, [dispatch]);
  console.log(yearWiseInvoiceData);
  return (
    <>
      <Stack padding={5} direction={"row"}>
        <Summary />
      </Stack>

      <div className="charts">
        {" "}
        <div className="invoice-chart">
          {yearWiseInvoiceData && (
            <YearWiseInvoices chartData={yearWiseInvoiceData} />
          )}
        </div>
        <div className="payment-chart">
          {paymentPerDayData && <PaymentPerDay chartData={paymentPerDayData} />}
        </div>
      </div>
    </>
  );
};

export default Statistics;
