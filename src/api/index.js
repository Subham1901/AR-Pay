import { useAPIHeaders } from "../hooks/useAPIHeader";
import { arPayService } from "./service";

export const getInvoices = async (cb) => {
  try {
    const { data } = await arPayService.get("/invoices", {
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

export const getSessionInfo = async (query, cb) => {
  try {
    const { data } = await arPayService.get(
      "/sessioninfo",

      {
        params: query,
        headers: useAPIHeaders(),
      }
    );
    return cb(null, data);
  } catch (error) {
    if (error?.response?.data?.message) {
      return cb(error?.response?.data?.message);
    }
    return cb("Something went wrong", null);
  }
};

export const updatePaymentStatus = async (query, cb) => {
  try {
    const response = await arPayService.get(
      "/updatestatus",

      {
        params: query,
        headers: useAPIHeaders(),
      }
    );
    return cb(null, response.data, response.status);
  } catch (error) {
    if (error?.response?.data?.message) {
      return cb(error?.response?.data?.message);
    }
    return cb("Something went wrong", null);
  }
};

export const getPaymentHistory = async (cb) => {
  try {
    const { data } = await arPayService.get("/paymenthistory", {
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
