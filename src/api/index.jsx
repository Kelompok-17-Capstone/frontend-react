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
  updateUser: (id, body) => {
    return altaAPIWithToken.put(`/admin/users/${id}`, body)
  },
  deleteUser: (id) => {
    return altaAPIWithToken.delete(`/admin/users/${id}`);
  },
  getUserById: (id) => {
    return altaAPIWithToken.get(`/admin/users/${id}`)
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
  updatePesanan: (id, body) => {
    return altaAPIWithToken.put(`/admin/orders/${id}`, body)
  },
  deletePesanan: (id) => {
    return altaAPIWithToken.delete(`/admin/orders/${id}`);
  },
  getUserPesananId: (id) => {
    return altaAPIWithToken.get(`/admin/orders/${id}`)
  },
};