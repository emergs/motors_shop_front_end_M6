import axios from "axios";

const api = axios.create({
  baseURL: "https://motorshop-icql.onrender.com",
  timeout: 5000,
});

export default api;
