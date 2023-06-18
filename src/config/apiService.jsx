import axios from "axios";

const altaAPI = axios.create({
  baseURL: "http://54.255.178.155",
});

altaAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

export { altaAPI };