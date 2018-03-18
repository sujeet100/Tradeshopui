import actionTypes from './actionTypes';
import productsApi from '../reducers/productsApi';

export const getProducts = () => ({
  type: actionTypes.GET_PRODUCTS
});

export const productsReceived = products => ({
  type: actionTypes.GET_PRODUCTS_RECEIVED,
  products
});

export const viewProducts = () => (
  (dispatch) => {
    dispatch(getProducts());
    return productsApi.getProducts()
      .then(products => dispatch(productsReceived(products.data)));
  }
);

export default getProducts;
