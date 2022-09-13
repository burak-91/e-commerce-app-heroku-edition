import { actionType } from "./actionTypes";

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state=INITIAL_STATE,action) =>{
   const { type, payload } = action;
    
    switch (type) {
        case actionType.SIGN_IN_SUCCESS:
            console.log(payload)
            return{
                ...state,
                currentUser:payload
            }
        case actionType.SIGN_IN_FAILED:
            return{
                ...state,
                 error: payload
            }
        case actionType.SIGN_OUT_SUCCESS:
            return{
                ...state,
                currentUser:null
            }
        case actionType.SIGN_OUT_FAILED:
            return{
                ...state,
                error: payload
            }
        default:
            return state;
    }


}
