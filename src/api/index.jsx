import { altaAPI, altaAPIWithToken } from "../config/apiService";

export const api = {
  // API Auth
  postLogin: (body) => {
    return altaAPI.post('/login', body);
  },

  // API Get Product
  getProduct: () => {
    return altaAPIWithToken.get('/admin/products')
  }
};


