import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    //check si el producto esta en el carrito
    const productInCart = cart.findIndex((item) => item.id === product.id);
    if (productInCart >= 0) {
      //structure clone
      const newCart = structuredClone(cart);
      newCart[productInCart].quantity += 1;
      //return para que salga de la funcion sino me sigue leyendo codigo abajo y aumenta el quantity pero me agrega otro producto igual
      return setCart(newCart);
    }
    //primera vez que areamosun producto que no se repita
    //creamos la propiedad quantity
    setCart((prevalue) => [...prevalue, { ...product, quantity: 1 }]);
  };
  const clearCart = () => setCart([]);

  const removeFromCart = (product) => {
    setCart((prevStatus) =>
      prevStatus.filter((item) => item.id !== product.id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
