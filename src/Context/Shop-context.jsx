import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ShopContext = createContext(null);

const getDefaultCart = (cars) => {
  let cart = {};
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    cart[car.id] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const defaultCart = getDefaultCart(cars);
    setCartItems(defaultCart);
  }, [cars]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = cars.find((car) => car.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};