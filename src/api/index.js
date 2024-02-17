import { useAPIHeaders } from "../hooks/useAPIHeader";
import { arPayService } from "./service";
const headers = useAPIHeaders();

export const getInvoices = async (cb) => {
  try {
    const { data } = await arPayService.get("/invoices", { headers });
    return cb(null, data);
  } catch (error) {
    if (error?.response?.data?.message) {
      return cb(error?.response?.data?.message);
    }
    return cb("Something went wrong", null);
  }
};
export const getCustomers = async (cb) => {
  try {
    const { data } = await arPayService.get("/customers", {
      headers: useAPIHeaders(),
    });
    return cb(null, data);
  } catch (error) {
    if (error?.response?.data?.message) {
      return cb(error?.response?.data?.message);
    }
    return cb("Something went wrong", null);
  }
};

export const getSummaryAR = async (cb) => {
  try {
    const { data } = await arPayService.get("/summary", {
      headers: useAPIHeaders(),
    });
    return cb(null, data);
  } catch (error) {
    if (error?.response?.data?.message) {
      return cb(error?.response?.data?.message);
    }
    return cb("Something went wrong", null);
  }
};

export const getSearchedValues = async (query, cb) => {
  try {
    const { data } = await arPayService.post("/search", query, {
      headers: useAPIHeaders(),
    });
    return cb(null, data);
  } catch (error) {
    if (error?.response?.data?.message) {
      return cb(error?.response?.data?.message);
    }
    return cb("Something went wrong", null);
  }
};

export const doPayment = async (query, cb) => {
  try {
    const { data } = await arPayService.post("/checkout", query, {
      headers: useAPIHeaders(),
    });
    return cb(null, data);
  } catch (error) {
    if (error?.response?.data?.message) {
      return cb(error?.response?.data?.message);
    }
    return cb("Something went wrong", null);
  }
};
