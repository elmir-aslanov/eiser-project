import axios from "axios";

const API_URL = "http://localhost:5000/api/cart";

export const getCartApi = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addToCartApi = async (productId, quantity) => {
  const response = await axios.post(API_URL, { productId, quantity });
  return response.data;
};

export const updateCartItemApi = async (productId, quantity) => {
  const response = await axios.put(`${API_URL}/${productId}`, { quantity });
  return response.data;
};

export const removeFromCartApi = async (productId) => {
  const response = await axios.delete(`${API_URL}/${productId}`);
  return response.data;
};
