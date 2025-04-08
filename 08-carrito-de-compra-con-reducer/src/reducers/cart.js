import { removeCartFromStorage, saveProductStorage } from "../logics/cartStorage";



export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || [];


export const CART_ACTION_TYPES={
    ADD_TO_CART:'ADD_TO_CART',
    REMOVE_FROM_CART:'REMOVE_FROM_CART',
    CLEAR_CART:'CLEAR_CART',
}

export const reducer = (state, action) => {
  //TYPE le pasamosel string de lo que hay que hacer
  //PAYLOAD le pasamos todo el objeto que necesitamos para actualizar el estado
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = payload;
      const productInCart = state.findIndex((item) => item.id === id);
      if (productInCart >= 0) {
        const newCart = structuredClone(state);
        newCart[productInCart].quantity += 1;

        //otra forma de hacerlo sin structureClone con MAP  
        // const newCart=state.map(item=>{
        //     if(item.id===id){
        //         return{
        //             ...item,
        //             quantity:item.quantity +1
        //         }
        //     }
        //     return item
        // })


        saveProductStorage(newCart)
        return newCart;
      }

      const newState= [
        ...state,
        {
          ...payload,
          quantity: 1,
        },
      ];
      saveProductStorage(newState)
      return newState
    }
    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = payload;
      const newState= state.filter((item) => item.id !== id);
      saveProductStorage(newState)
      return newState
    }
    case CART_ACTION_TYPES.CLEAR_CART: {
        removeCartFromStorage()
        return [];
    }
  }
  return state;
};