// src/components/DishesMenu.js
import React, { useContext } from 'react';
import DishCard from './DishCard';
import { RestaurantContext } from '../contexts/RestaurantContext';
import { CartContext } from '../contexts/CartContext';

const DishesMenu = () => {
  const { selectedRestaurant } = useContext(RestaurantContext);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (dish) => {
    addToCart(dish);
  };

  return (
    <div>
      <h2>Menu</h2>
      {selectedRestaurant && (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {selectedRestaurant.menu.map((dish) => (
            <DishCard key={dish.name} dish={dish} onAddToCart={() => handleAddToCart(dish)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DishesMenu;
