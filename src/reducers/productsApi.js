import axios from 'axios/index';

const productsApi = {
  getProducts: () => axios.get('http://localhost:4000/products')
};

export default productsApi;
