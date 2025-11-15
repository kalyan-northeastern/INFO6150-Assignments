import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Login API
export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/user/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Login failed' };
  }
};

// Get users with images for Company Showcase
export const getUsersWithImages = async () => {
  try {
    const response = await api.get('/user/getUsersWithImages');
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to fetch companies' };
  }
};

export default api;

