import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://672a011d6d5fa4901b6f5382.mockapi.io/',
});

export default axiosInstance;
