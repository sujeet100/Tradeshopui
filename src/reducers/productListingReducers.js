import actionTypes from '../actions/actionTypes';
import productListingInitialState from './productListingInitialState';

const getProducts = (state = productListingInitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS: {
      return state;
    }
    case actionTypes.GET_PRODUCTS_RECEIVED:
      return {
        ...state,
        products: action.products
      };
    default:
      return state;
  }
};

export default getProducts;
