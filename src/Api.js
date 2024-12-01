import axios from 'axios';

// Configuração da URL base da API
const api = axios.create({
  baseURL: 'http://localhost:3001', // URL da API
});

export default api;
