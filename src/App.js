import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import store from './store';
import ProductListingContainer from './containers/productListingContainer';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to TradeShop</h1>
      </header>
      <p className="App-intro">
                Enjoy shopping
      </p>
      <ProductListingContainer />
    </div>
  </Provider>
);

export default App;
