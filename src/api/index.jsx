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
  getUsers: () => {
    return altaAPIWithToken.get('/admin/users')
  },
  getMember: () => {
    return altaAPIWithToken.get('/admin/users?role=member')
  },
  getReguler: () => {
    return altaAPIWithToken.get('/admin/users?role=reguler')
  },

  // API Get Pesanan
  getPesanan: () => {
    return altaAPIWithToken.get('/admin/orders')
  },
  getPesananDikemas: () => {
    return altaAPIWithToken.get('/admin/orders?status=dikemas');
  },
  getPesananDikirim: () => {
    return altaAPIWithToken.get('/admin/orders?status=dikirim');
  },
  getPesananDiterima: () => {
    return altaAPIWithToken.get('/admin/orders?status=diterima')
  },
  getPesananByStatus: (status) => {
    return altaAPIWithToken.get(`/admin/orders?status=${status}`);
  },

  //API Get Dashboard
  getDashboardData: () => {
    return altaAPIWithToken.get(`/admin/dashboard`)
  },
};


















