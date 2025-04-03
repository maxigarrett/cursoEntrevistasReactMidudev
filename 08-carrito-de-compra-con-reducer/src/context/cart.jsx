import { createContext, useReducer } from "react";

export const CartContext = createContext();

//REDUCER
const initialState = [];
const reducer = (state, action) => {
  //TYPE le pasamosel string de lo que hay que hacer
  //PAYLOAD le pasamos todo el objeto que necesitamos para actualizar el estado
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART": {
      const { id } = payload;
      const productInCart = state.findIndex((item) => item.id === id);
      if (productInCart >= 0) {
        const newCart = structuredClone(state);
        newCart[productInCart].quantity += 1;
        return newCart;
      }

      return [
        ...state,
        {
          ...payload,
          quantity: 1,
        },
      ];
    }
    case "REMOVE_FROM_CART": {
      const { id } = payload;
      return state.filter((item) => item.id !== id);
    }
    case "CLEAR_CART": {
      return initialState;
    }
  }
  return state;
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };

  const clearCart = () => dispatch({ type: "CLEAR_CART" });
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
