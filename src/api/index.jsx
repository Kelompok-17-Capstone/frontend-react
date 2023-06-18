import { altaAPI } from "../config/apiService";

export const api = {
  // API Auth
  postLogin: (body) => {
    return altaAPI.post('/login', body);
  },

  // API Product
  getProduct: () => {
    return altaAPI.get('/admin/products')
  }
};


