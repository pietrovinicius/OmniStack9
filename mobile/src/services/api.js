import axios from 'axios';

const api = axios.create({
  baseURL : 'http://192.168.0.101:3333',
});

//default endereço do Diego
//baseURL: 'http://192.168.0.31:3333',

export default api;