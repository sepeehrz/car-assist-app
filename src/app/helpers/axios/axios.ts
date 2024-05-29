import axios from 'axios';

const token = localStorage.getItem('token');

const axiosInstance = axios.create({
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    authorization: token ? token : '',
    common: {
      tenant: 'root'
    }
  }
});
export default axiosInstance;
