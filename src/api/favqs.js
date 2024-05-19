import axios from 'axios';

const API_URL = 'https://favqs.com/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Authentication
export const login = (user) => api.post('/session', { user });
export const register = (user) => api.post('/users', { user });
export const getProfile = (token) => api.get('/user', { headers: { Authorization: `Token ${token}` } });
export const updateProfile = (user, token) => api.put('/user', { user }, { headers: { Authorization: `Token ${token}` } });

// Quotes
export const getQuoteOfTheDay = () => api.get('/qotd');
export const searchQuotes = (query) => api.get(`/quotes/?filter=${query}`);
export const favoriteQuote = (id, token) => api.post(`/quotes/${id}/fav`, {}, { headers: { Authorization: `Token ${token}` } });
export const unfavoriteQuote = (id, token) => api.delete(`/quotes/${id}/fav`, { headers: { Authorization: `Token ${token}` } });
export const hideQuote = (id, token) => api.post(`/quotes/${id}/hide`, {}, { headers: { Authorization: `Token ${token}` } });
