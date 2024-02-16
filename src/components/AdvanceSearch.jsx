import React, { useState } from "react";

import { buttonStyle } from "../utils/util";
import { Autocomplete, Box, Button, Input, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { getCustomers } from "../api";
import { toast } from "react-toastify";

const AdvanceSearch = () => {
  const [customers, setCustomers] = useState(null);
  return (
    <Box
      sx={{
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
          <TextField
            label="Invoice Date"
            variant="outlined"
            defaultValue={new Date().toISOString().substring(0, 10)}
            color="primary"
            type="date"
            sx={{ m: 2, color: "wheat" }}
          />
          <TextField
            label="Invoice Number"
            variant="outlined"
            placeholder="Invcoice Number"
            sx={{ m: 2 }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            m: 2,
          }}
        >
          <Autocomplete
            sx={{ m: 2 }}
            multiple
            id="tags-outlined"
            onOpen={async () => {
              if (!customers) {
                await getCustomers((err, data) => {
                  if (err) toast.error(err);
                  setCustomers(data?.customers);
                });
              }
            }}
            loading
            options={customers || []}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} label="Customers" placeholder="Customer" />
            )}
          />
          <TextField
            label="Currency"
            variant="outlined"
            sx={{ m: 2 }}
            placeholder="Currency"
          />
        </Box>
      </Box>
      <Button variant="outlined">Search</Button>
    </Box>
  );
};

export default AdvanceSearch;
