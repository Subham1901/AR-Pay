import React from "react";
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

const Statistics = () => {
  // let uniqData = [];
  // const data = invoiceData.invoices.data.map((data) => data.contact.customer);
  // data
  //   .filter((cus, index) => data.indexOf(cus) === index)
  //   .forEach((data) => {
  //     uniqData.push({ label: data, value: data });
  //   });

  // const totalAmount = invoiceData?.invoices?.data?.reduce(
  //   (acc, curr) => acc + curr?.amount,
  //   0
  // );
  // console.log(totalAmount);
  // const formattedNumber = totalAmount.toLocaleString("en-US", {
  //   style: "currency",
  //   currency: "USD",
  // });
  return (
    <>
      <Stack padding={5} direction={"row"}>
        <Card sx={{ maxWidth: 345, m: 2 }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color="text.secondary"
              fontWeight={800}
              component="div"
            >
              Total AR Amount
            </Typography>
            <Typography fontSize={20} variant="body1" color="text.secondary">
              {18881}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345, m: 2 }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color="text.secondary"
              fontWeight={800}
              component="div"
            >
              Total Customers
            </Typography>
            <Typography fontSize={20} variant="body1" color="text.secondary">
              {1}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345, m: 2 }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color="text.secondary"
              fontWeight={800}
              component="div"
            >
              Total AR Items
            </Typography>
            <Typography fontSize={20} variant="body1" color="text.secondary">
              {18}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345, m: 2 }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color="text.secondary"
              fontWeight={800}
              component="div"
            >
              Total Paid AR Items
            </Typography>
            <Typography fontSize={20} variant="body1" color="text.secondary">
              {5}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345, m: 2 }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color="text.secondary"
              fontWeight={800}
              component="div"
            >
              Due Date Passed Items
            </Typography>
            <Typography fontSize={20} variant="body1" color="text.secondary">
              {5}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345, m: 2 }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color="text.secondary"
              fontWeight={800}
              component="div"
            >
              Close Date Items
            </Typography>
            <Typography fontSize={20} variant="body1" color="text.secondary">
              {98}
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
};

export default Statistics;
