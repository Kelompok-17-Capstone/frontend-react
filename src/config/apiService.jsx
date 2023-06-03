import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "https://6451b8d2a2860c9ed4f99e5e.mockapi.io",
});

export const sheetDBAPI = axios.create({
  baseURL: "",
});
