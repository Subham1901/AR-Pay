import { arPayService } from "./service";

export const getInvoices = async (cb) => {
  try {
    const { data } = await arPayService.get("/invoices");
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
    const { data } = await arPayService.get("/customers");
    return cb(null, data);
  } catch (error) {
    if (error?.response?.data?.message) {
      return cb(error?.response?.data?.message);
    }
    return cb("Something went wrong", null);
  }
};
