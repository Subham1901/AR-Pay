import React from "react";

import { buttonStyle, invoiceData } from "../utils/util";
import { Box, Button, Input, TextField } from "@mui/material";

const AdvanceSearch = () => {
  let uniqData = [];
  const data = invoiceData.invoices.data.map((data) => data.contact.customer);
  data
    .filter((cus, index) => data.indexOf(cus) === index)
    .forEach((data) => {
      uniqData.push({ label: data, value: data });
    });

  return (
    <Box
      sx={{
        padding: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            m: 2,
          }}
        >
          <TextField type="date" sx={{ m: 2 }} />
          <TextField placeholder="Invcoice Number" sx={{ m: 2 }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            m: 2,
          }}
        >
          <TextField sx={{ m: 2 }} placeholder="Invcoice Number" />
          <TextField sx={{ m: 2 }} placeholder="Currency" />
        </Box>
      </Box>
      <Button variant="outlined">Search</Button>
    </Box>
  );
};

export default AdvanceSearch;
