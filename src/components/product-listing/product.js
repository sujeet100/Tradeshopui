import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ productName, description, price }) => (
  <div>
    <h2> {productName} </h2>
    <p>{description}</p>
    <p>{price}</p>
  </div>
);

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
};


export default Product;
