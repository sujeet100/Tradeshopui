import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ productName, description, price, image }) => (
  <div className="product-item">
    <h2> {productName} </h2>
    <img alt="product" src={image} />
    <p className="price">&#8377;{price}</p>
    <p>{description}</p>
  </div>
);

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
};


export default Product;
