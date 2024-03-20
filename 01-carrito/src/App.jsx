import { useState,useEffect } from "react";
import Footer from "./components/Footer";
import { Guitar } from "./components/Guitar";
import Header from "./components/Header";
import { db } from "./data/db";

const App = () => {
 
  const initialCart = () => {
    const getLocalStorage = (localStorage.getItem("cart"));
    return getLocalStorage ? JSON.parse(getLocalStorage) : []
  }

  

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);


  const MIN_ITEMS = 1;
  const MAX_ITEMS = 9000000;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  },[cart])

  function addToCart(item) {
    const itemExist = cart.findIndex((cartItem) => cartItem.id == item.id);
    if (itemExist >= 0) {
      if(cart[itemExist].quantity >= MAX_ITEMS) return
      const updatedCart = [...cart];
      updatedCart[itemExist].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  function removeItem(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  function increaseQuantity(id) {
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

  function decreaseQuantity(id) {
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

  return (
    <>
      <Header
        cart={cart}
        removeItem={removeItem}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;
