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
      <div style={{display:'flex'}}>
        {products.map((product) => (
          <div key={product.id} style={{marginRight:'30px'}}>
            <div style={{width:'100px', height:'100px', backgroundColor:'gray'}}></div>
            <p>{product.name} - ${product.price.toFixed(2)}</p>
            <button style={{marginBottom:'20px'}} onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
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
