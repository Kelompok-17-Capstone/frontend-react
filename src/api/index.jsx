import { altaAPI, altaAPIWithToken } from "../config/apiService";

export const api = {
  // API Auth
  postLogin: (body) => {
    return altaAPI.post('/login', body);
  },

  // API Get Product
  getProduct: () => {
    return altaAPIWithToken.get('/admin/products')
  },
  getProductTersedia: () => {
    return altaAPIWithToken.get('/admin/products?status=tersedia');
  },

  getProductHabis: () => {
    return altaAPIWithToken.get('/admin/products?status=habis');
  },

  getProductByStatus: (status) => {
    return altaAPIWithToken.get(`/admin/products?status=${status}`);
  },
  // API Get User
  getUsers: async () => {
    try {
      const response = await altaAPIWithToken.get('/admin/users');
      console.log(response.data.data); // Log the user data array
      return response.data.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getUserMember: () => {
    return altaAPIWithToken.get('/admin/users?role=member');
  },

  getUserReguler: () => {
    return altaAPIWithToken.get('/admin/users?role=reguler');
  },

  getUserByRole: (role) => {
    return altaAPIWithToken.get(`/admin/users?role=${role}`);
  },

  // API Get Pesanan
  getPesanan: () => {
    return altaAPIWithToken.get('/admin/orders')
  },
};


