import { actionType } from "./actionTypes"

export const  setCurrentUser = (user) =>({type:actionType.SET_CURRENT_USER, payload:user})



export const checkUserSession = () => ({type:actionType.CHECK_USER_SESSION});

export const googleSingInStart = () => ({type: actionType.GOOGLE_SIGN_IN_START});

export const emailSignInStart = (email,password) => ({type: actionType.EMAIL_SIGN_IN_START, payload:{email,password}});

export const signInSuccess = (user) => ({type: actionType.SIGN_IN_SUCCESS, payload: user})

export const signInFailed = (error) => ({type: actionType.SIGN_IN_FAILED, payload: error})

export const signUpStart = (email,password,username)  => ({type:actionType.SIGN_UP_START,payload:{email,password,username} })

export const signUpSuccess = (user,additionalDetails) => ({type:actionType.SIGN_UP_SUCCESS,payload:{ user, additionalDetails}})

export const signUpFailed = (error) => ({type: actionType.SIGN_UP_FAILED, payload: error})

export const signOutStart = () => ({type: actionType.SIGN_OUT_START})

export const signOutSuccess = () => ({type:actionType.SIGN_OUT_SUCCESS})

export const signOutFailed = (error) => ({type: actionType.SIGN_OUT_FAILED, payload: error})