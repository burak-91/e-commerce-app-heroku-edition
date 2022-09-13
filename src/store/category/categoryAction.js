import { actionTypes } from "./actionTypes";


export const fetchCategoriesStart = () =>({type: actionTypes.FETCH_CATEGORIES_START})
export const fetchCategoriesSuccess = (categories) =>({type:actionTypes.FETCH_CATEGORIES_SUCCESS, payload:categories})
export const fetchCategoriesFailed = (error) => ({type:actionTypes.FETCH_CATEGORIES_FAILED,payload:error})

