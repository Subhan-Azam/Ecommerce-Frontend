import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/products",
  timeout: 5000,
});
