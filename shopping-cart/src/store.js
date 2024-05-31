// src/store.js
import { createStore } from 'redux';
import cartReducer from './reducers/cartReducer';

const initialState = {
  products: [
    { id: 1, name: 'Product 1', price: 10.00 },
    { id: 2, name: 'Product 2', price: 15.00 },
    { id: 3, name: 'Product 3', price: 20.00 }
  ],
  cart: []
};

const store = createStore(cartReducer, initialState);

export default store;
