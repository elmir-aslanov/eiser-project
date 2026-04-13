import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error.message);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch product details:", error.message);
    return null;
  }
};
