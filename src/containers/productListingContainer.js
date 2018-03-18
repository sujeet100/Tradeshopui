import { connect } from 'react-redux';
import ProductListing from '../components/product-listing/productListing';
import { viewProducts } from '../actions/productListingActions';

const mapStateToProps = state => ({
  products: state.getProducts.products
});

const mapDispatchToProps = dispatch => ({
  viewProducts: () => dispatch(viewProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListing);
