// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <img src={item.image} alt={item.name} style={{ width: 50, height: 50, marginRight: 10 }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Price: ${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
