import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bethehero11.herokuapp.com/',
})

export default api;