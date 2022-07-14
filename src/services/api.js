import axios from 'axios';

const baseUrl = 'https://eai-tem-mesa.herokuapp.com/';

const api = axios.create({
  baseURL: baseUrl,
  timeout: 15000
});

export default api;
