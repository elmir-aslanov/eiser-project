import axios from "axios";

const API_URL = "http://localhost:5000/api/wishlist";

export const getWishlistApi = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addToWishlistApi = async (productId) => {
  const response = await axios.post(API_URL, { productId });
  return response.data;
};

export const removeFromWishlistApi = async (productId) => {
  const response = await axios.delete(`${API_URL}/${productId}`);
  return response.data;
};
