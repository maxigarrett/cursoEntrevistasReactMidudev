export const saveProductStorage=(newState)=>{
    window.localStorage.setItem('cart',JSON.stringify(newState))
}

export const removeCartFromStorage=()=>{
    window.localStorage.removeItem('cart')
}