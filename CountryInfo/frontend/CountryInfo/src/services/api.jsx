import axios from 'axios';

const API_URL = 'https://countryinfo-0crs.onrender.com/';

export const register = (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

export const login = (userData) => {
  return axios.post(`${API_URL}/auth/login`, userData);
};

export const getCountryByCurrency = (currency) => {
  return axios.get(`${API_URL}/countries/${currency}`);
};

export const addFavorite = (token, country) => {
  return axios.post(`${API_URL}/user/favorites`, { country }, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const getFavorites = (token) => {
  return axios.get(`${API_URL}/user/favorites`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const addSearchHistory = (token, search) => {
  return axios.post(`${API_URL}/user/search-history`, { search }, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const getSearchHistory = (token) => {
  return axios.get(`${API_URL}/user/search-history`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
