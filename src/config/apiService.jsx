import axios from "axios";
import { BASE_URL } from "../utils";

// const baseURL = import.meta.env.VITE_APP_BASE_URL
// const url = 'http://54.255.178.155:5174/${baseURL}'

const token = localStorage.getItem('token')

const altaAPI = axios.create({
  baseURL: BASE_URL.API,
  headers: {
    'Content-Type': 'application/json'
  }
});

const altaAPIWithToken = axios.create({
  baseURL: BASE_URL.API,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
})

export { altaAPI, altaAPIWithToken };