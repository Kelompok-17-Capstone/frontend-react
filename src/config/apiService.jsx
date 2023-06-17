import axios from "axios";

const altaAPI = axios.create({
  baseURL: "http://54.255.178.155",
});

altaAPI.interceptors.request.use((config) => {
  // Check if the token is available in the localStorage or wherever you store it
  const token = localStorage.getItem("access_token");

  // Set the Authorization header if the token is available
  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

export { altaAPI };