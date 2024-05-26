import axios from 'axios';

const axiosInstance = axios.create({
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    common: {
      tenant: 'root'
    }
  }
});
export default axiosInstance;
