import React, { useState } from "react";

import { buttonStyle } from "../utils/util";
import {
  Autocomplete,
  Box,
  Button,
  Input,
  Stack,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers, getSearchedValues } from "../api";
import { toast } from "react-toastify";

const AdvanceSearch = () => {
  const dispatch = useDispatch();
  const [customers, setCustomers] = useState(null);

  const [searchData, setSearchData] = useState({
    invoiceNumber: "",
    currency: "",
    customers: [],
    invoiceDate: "",
  });

  const getSearchedValue = async () => {
    let query = {};
    for (const key in searchData) {
      if (searchData[key] === "") {
        query[key] = null;
      } else {
        query[key] = searchData[key];
      }
    }
    console.log(query);
    dispatch({ type: "LOADING_TURE" });
    await getSearchedValues(query, (err, data) => {
      if (err) {
        toast.error(err);
      } else {
        dispatch({ type: "GET_SEARCH_QUERY", payload: data });
      }
    });
  };

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
            onChange={() =>
              setSearchData({
                ...searchData,
                invoiceDate: event.target.value,
              })
            }
            // label="Invoice Date"
            // variant="outlined"
            // defaultValue={new Date().toISOString().substring(0, 10)}
            color="primary"
            type="date"
            sx={{ m: 2, color: "wheat" }}
          />
          <TextField
            value={searchData?.invoiceNumber}
            onChange={() =>
              setSearchData({
                ...searchData,
                invoiceNumber: +event.target.value,
              })
            }
            type="number"
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
            limitTags={1}
            onChange={(event, newValue) => {
              setSearchData({
                ...searchData,
                customers: newValue.map((data) => Number(data)),
              });
            }}
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
            defaultValue={searchData?.currency}
            label="Currency"
            variant="outlined"
            sx={{ m: 2 }}
            placeholder="Currency"
          />
        </Box>
      </Box>
      <Stack direction={"row"}>
        <Button onClick={() => getSearchedValue()} variant="outlined">
          Search
        </Button>
        <Button
          color="secondary"
          sx={{ ml: 2 }}
          onClick={() => {
            setSearchData({
              ...searchData,
              invoiceNumber: "",
              invoiceDate: new Date().toISOString().substring(0, 10),
              customers: [],
            });
            dispatch({ type: "CLEAR_SEARCH_QUERY" });
          }}
          variant="outlined"
        >
          Clear Filter
        </Button>
      </Stack>
    </Box>
  );
};

export default AdvanceSearch;
