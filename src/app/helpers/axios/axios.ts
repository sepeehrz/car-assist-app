import axios from 'axios';
const axiosInstance = axios.create({
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0IiwicGFzc3dvcmQiOiIkMmEkMTIkZDJ3V3pETFZIVm9XOWhqRVJ1VjJYLlJhRFA1empBMFZVclFrOERGLnN1dG9vVEp2Y2EwdnkiLCJuYW1lIjoic2VwZWhyIiwiZmFtaWx5IjpudWxsLCJuYXRpb2FubF9jb2RlIjpudWxsLCJjcmVhdGVkQXQiOiIyMDI0LTA1LTIyVDEzOjUyOjUxLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDI0LTA1LTIyVDEzOjUyOjUxLjAwMFoiLCJpYXQiOjE3MTY3NTIwNTV9.mJu6qZ7AoC1BjrXcDoxREAttwSSQVAKwnKZ3bWKdUDU',
    common: {
      tenant: 'root'
    }
  }
});
export default axiosInstance;
