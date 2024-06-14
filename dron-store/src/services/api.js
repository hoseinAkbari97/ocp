import axios from 'axios';

const API_URL = 'http://localhost:8000/api/'; // Adjust based on your Django backend URL

export const getProducts = () => axios.get(`${API_URL}products/`);
export const getProduct = (id) => axios.get(`${API_URL}products/${id}/`);
export const getCollections = () => axios.get(`${API_URL}collections/`);
export const getCollection = (id) => axios.get(`${API_URL}collections/${id}/`);
export const getCart = (id) => axios.get(`${API_URL}carts/${id}/`);
export const addItemToCart = (cartId, productId) =>
  axios.post(`${API_URL}carts/${cartId}/items/`, { product_id: productId });
export const removeItemFromCart = (cartId, itemId) =>
  axios.delete(`${API_URL}carts/${cartId}/items/${itemId}/`);
export const createOrder = (cartId) =>
  axios.post(`${API_URL}orders/`, { cart_id: cartId });
export const getOrders = () => axios.get(`${API_URL}orders/`);
