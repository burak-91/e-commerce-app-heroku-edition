import { actionTypes } from "./actionTypes";


const INITIAL_STATE = {
    isCartDropDownOpen: false,
    cartItems: [],
}


export const cartReducer = (state=INITIAL_STATE,action={}) =>{
    const {type,payload} = action;
    switch (type) {
        case actionTypes.SET_CART_ITEMS:
            return{
                ...state,
                cartItems: payload
            }
        case actionTypes.SET_CART_DROPDOWN:
            return {
                ...state,
                isCartDropDownOpen:payload
            }
        default:
            return state;
    }
}