// src/components/ShoppingCart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from '../actions/cartActions';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity(id, quantity));
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)} x {item.quantity}
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${totalAmount.toFixed(2)}</h2>
    </div>
  );
};

export default ShoppingCart;
