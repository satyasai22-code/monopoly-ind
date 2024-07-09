import axios from 'axios';

const URL = `http://localhost`
const PORT = 5000

const api = axios.create({
  baseURL: `${URL}:${PORT}/api`
});

export default api;
