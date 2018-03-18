import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './product';

class ProductListing extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    viewProducts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { viewProducts } = this.props;
    viewProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(product =>
          <Product key={product.sku} productName={product.name} description={product.description} price={product.price} />)}
      </div>
    );
  }
}

export default ProductListing;
