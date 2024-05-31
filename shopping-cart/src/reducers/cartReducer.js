// src/reducers/cartReducer.js
const initialState = {
  products: [
    { id: 1, name: 'Product 1', price: 10.00 },
    { id: 2, name: 'Product 2', price: 15.00 },
    { id: 3, name: 'Product 3', price: 20.00 }
  ],
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const product = action.payload;
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
