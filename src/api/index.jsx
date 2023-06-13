import { baseAPI, sheetDBAPI } from "../config/apiService";

export const api = {
  // API Auth
  register: (body) => {
    return sheetDBAPI.post(`?sheet=`, body);
  },
  getProfile: () => {
    return sheetDBAPI.get(`?sheet=`);
  },

  // API Users
  getUsers: () => {
    return baseAPI.get(`/users`);
  },

  getUsersById: (id) => {
    return baseAPI.get(`/users/${id}`);
  },

  updateUsers: (id, body) => {
    return baseAPI.put(`/users/${id}`, body);
  },

  deleteUsers: (id) => {
    return baseAPI.delete(`/users/${id}`);
  },

  // createBiodata: (body) => {
  //   return baseAPI.post(`/biodatas`, body);
  // },

};
