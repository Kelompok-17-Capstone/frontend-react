import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "",
});

export const sheetDBAPI = axios.create({
  baseURL: "",
});
