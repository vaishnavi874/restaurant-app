// src/App.js
import React, { useContext, useState } from 'react';
import RestaurantList from './components/RestaurantList';
import DishesMenu from './components/DishesMenu';
import Cart from './components/Cart';
import { RestaurantContext } from './contexts/RestaurantContext';
import CartProvider from './contexts/CartContext';
import './App.css';  // Import the CSS file

const App = () => {
  const { selectedRestaurant } = useContext(RestaurantContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <div className="container">
        <h1 className="header">SPOT YOUR DINE</h1>
        <img src="SYD LOGO.PNG" alt='' style={{ height: 300, width: 500, position: "relative" }} />
        <button 
          onClick={toggleCart} 
          style={{
            position: "absolute", 
            right: "20px", 
            top: "20px",
            padding: "10px 20px",
            cursor: "pointer"
          }}
        >
          {isCartOpen ? 'Close Cart' : 'Open Cart'}
        </button>
        {isCartOpen && <Cart />}
        <RestaurantList />
        {selectedRestaurant && <DishesMenu />}
      </div>
    </CartProvider>
  );
};

export default App;
