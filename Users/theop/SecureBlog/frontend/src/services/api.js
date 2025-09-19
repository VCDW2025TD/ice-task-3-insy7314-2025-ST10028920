import axios from "axios";

const API = axios.create({
  baseURL: "https://localhost:5000/api",
  headers: { "Content-Type": "application/json" }
});

// attach JWT if present
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = Bearer ;
  return config;
});

export default API;
