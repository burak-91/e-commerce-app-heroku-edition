import { actionTypes } from "./actionTypes";

const INITIAL_STATE = {
    categories:[],
    isLoading: false,
    error: null
}


export const categoryReducer = (state=INITIAL_STATE,action) =>{
        const {type, payload} = action;
        switch (type) {
            case actionTypes.FETCH_CATEGORIES_START:
                return{
                    ...state,
                    isLoading:true
                }
            case actionTypes.FETCH_CATEGORIES_SUCCESS:
                return{
                    ...state,
                    categories:payload,
                    isLoading:false
                }
            case actionTypes.FETCH_CATEGORIES_FAILED:
                return{
                    ...state,
                    error:payload,
                    isLoading:false
                }
            default:
                return state;
        }
}