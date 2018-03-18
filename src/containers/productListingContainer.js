import { connect } from 'react-redux';
import ProductListing from '../components/product-listing/productListing';
import { getProducts } from '../actions/productListingActions';

const mapStateToProps = state => ({
  products: state.getProducts.products
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListing);
