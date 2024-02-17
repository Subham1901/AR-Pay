import axios from "axios";
import { useAPIHeaders } from "../hooks/useAPIHeader";

export const arPayService = axios.create({
  baseURL: import.meta.env.VITE_AR_PAY_SERVICE_URL,
});
