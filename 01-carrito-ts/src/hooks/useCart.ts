import { useState, useEffect } from "react";
import { db } from "../data/db";
import { CartItem, Guitar } from "../types";

const useCart = () => {
  // Extraer informacion de localStorage
  const initialCart = (): CartItem[] => {
    const getLocalStorage = localStorage.getItem("cart");
    return getLocalStorage ? JSON.parse(getLocalStorage) : [];
  };

  const MIN_ITEMS = 1;
  const MAX_ITEMS = 9000000;

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  // Extraer datos de localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item: Guitar) {
    const itemExist = cart.findIndex((cartItem) => cartItem.id == item.id);
    if (itemExist >= 0) {
      if (cart[itemExist].quantity >= MAX_ITEMS) return;
      const updatedCart = [...cart];
      updatedCart[itemExist].quantity++;
      setCart(updatedCart);
    } else {
      const newItem: CartItem = { ...item, quantity: 1 };
      setCart([...cart, newItem]);
    }
  }

  function removeItem(id: Guitar["id"]) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  function increaseQuantity(id: Guitar["id"]) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    setCart(updatedCart);
  }

  function decreaseQuantity(id: Guitar["id"]) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]);
  }

  //State Derivado
  const isEmpty = cart.length === 0;
  const cartTotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return {
    data,
    cart,
    addToCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  };
};

export { useCart };
