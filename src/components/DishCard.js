import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const DishCard = ({ dish }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);

  const handleAdd = () => {
    addToCart(dish);
  };

  const handleRemove = () => {
    removeFromCart(dish);
  };

  const itemInCart = cartItems.find(cartItem => cartItem.name === dish.name);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  return (
    <div className="dish-card">
      <h3>{dish.name}</h3>
      <img src={dish.image} alt="" />
      <p>Price: ${dish.price}</p>
      <div
        style={{
          width: "40%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button onClick={handleRemove}>-</button>
        <span>{quantity}</span>
        <button onClick={handleAdd}>+</button>
      </div>
    </div>
  );
};

export default DishCard;
