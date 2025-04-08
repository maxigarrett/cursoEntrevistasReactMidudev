import { createContext, useReducer } from "react";
import { CART_ACTION_TYPES, cartInitialState, reducer } from "../reducers/cart";

export const CartContext = createContext();

//costom hook para las funciones no necesitan estar dentro de la funcion lo podemos poner en los hooks ya que mintras tenga el
//dispatch dentro el trabajo lo hace el reducer
const useCartReducer = () => {
  const [state, dispatch] = useReducer(reducer, cartInitialState);

  const addToCart = (product) => {
    dispatch({
      type: CART_ACTION_TYPES.ADD_TO_CART,
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_FROM_CART,
      payload: product,
    });
  };

  const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAR_CART });

  return { state, addToCart, removeFromCart, clearCart };
};

export const CartProvider = ({ children }) => {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();
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
