import { actionTypes } from "./actionTypes";

//helper functions
const addToCartIfNotExists = (cartItems, newProduct) => {
    const existingProduct = cartItems.find(
        (product) => product.id === newProduct.id
    );
    
    if (existingProduct) {
        return cartItems.map((product) =>
        product.id === newProduct.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
    }
    
    return [...cartItems, { ...newProduct, quantity: 1 }];
}
const removeFromCart = (cartItems, productToRemove) => {
    const existingProduct = cartItems.find((product) => product.id === productToRemove.id);
   

    if(existingProduct.quantity === 1){
        return cartItems.filter((product) => product.id !== productToRemove.id);
    }

    return cartItems.map((product) =>
    product.id === productToRemove.id
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
}

// actions

export const addItemToCart = (cartItems,newProduct) => {
    const newCartItem =  addToCartIfNotExists(cartItems, newProduct)
    return {type: actionTypes.SET_CART_ITEMS, payload: newCartItem}
}
export const removeItemFromCart = (cartItems,cartItemToRemove) => {
   const newCartItem = removeFromCart(cartItems, cartItemToRemove)
   return {type: actionTypes.SET_CART_ITEMS, payload: newCartItem}
}
export const removeByChoosing = (cartItems,cartItemToRemove) => {
  const newCartItem = cartItems.filter((product) => product.id !== cartItemToRemove.id)
  return {type: actionTypes.SET_CART_ITEMS, payload: newCartItem}
}

export const setCartDropdown = (bool) =>({type:actionTypes.SET_CART_DROPDOWN, payload:bool})