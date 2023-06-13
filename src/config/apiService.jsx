import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "https://documenter.getpostman.com/view/27665493/2s93m7XMnc",
});

export const sheetDBAPI = axios.create({
  baseURL: "",
});
