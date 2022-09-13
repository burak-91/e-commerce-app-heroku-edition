import {takeLatest, put, all, call} from 'redux-saga/effects'

import { actionType } from './actionTypes'

import { signInSuccess, signInFailed, signOutFailed, signOutSuccess, signUpSuccess, signUpFailed } from './userActions'

import { getCurrentUser, createUserDocument, signInWithGooglePopup, signInUserWithEmailAndPassword, signOutUser, createAuthUserWithEmailAndPassword } from '../../firebase/firebase'


//checking User
export function* getSnapShotFromUserAuth(userAuth, additionalDetails){
    try {
        const userSnapshot = yield call(createUserDocument, userAuth, additionalDetails);
        console.log(userSnapshot.id)
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch (error) {
        yield put(signInFailed(error))
    }
}



export function* isUserAuthenticated(){
    try {
        const userAuth= yield call(getCurrentUser);
        if(!userAuth) return;
        yield call(getSnapShotFromUserAuth, userAuth);
    } catch (error) {
        yield put(signInFailed(error));
    }
}



export function* onCheckUserSession(){
    yield takeLatest(actionType.CHECK_USER_SESSION, isUserAuthenticated)
}
/*----------------------------------------------------------------------------------------------------------- */
//google SignIn

export function* signInWithGoogle(){
    try {
       const {user} = yield call(signInWithGooglePopup);
       yield call(getSnapShotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(actionType.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

/*----------------------------------------------------------------------------------------------------------- */
//email, password signIn

export function* signInEmailPassword({payload:{email,password}}){
    try {
        const {user} = yield call(signInUserWithEmailAndPassword,email,password)
        yield call(getSnapShotFromUserAuth,user)
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* emailPasswordSignIn(){
    yield takeLatest(actionType.EMAIL_SIGN_IN_START,signInEmailPassword)
}
/*----------------------------------------------------------------------------------------------------------- */
//signUpWithEmailPassword


export function* signUpUserEmail({payload:{email,password,username}}){
    try {
        const {user} = yield call(createAuthUserWithEmailAndPassword,email,password)
        yield put(signUpSuccess(user,{username}))
    } catch (error) {
        yield put(signUpFailed(error))
    }
}

export function* signUpEmail(){
    yield takeLatest(actionType.SIGN_UP_START,signUpUserEmail)
}


/*----------------------------------------------------------------------------------------------------------- */
//signUpWithEmailPassword part2
export function* signInAfterSignUp({payload:{user,additionalDetails}}){
    yield call(getSnapShotFromUserAuth,user,additionalDetails)
}


export function* onSignUpStart(){
    yield takeLatest(actionType.SIGN_IN_SUCCESS, signInAfterSignUp)
}
/*----------------------------------------------------------------------------------------------------------- */
//signout
export function* signOutFromAuth(){
    try {
        yield call (signOutUser)
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailed(error))
    }
}


export function* signOutFromFire(){
    yield takeLatest(actionType.SIGN_OUT_START,signOutFromAuth)
}

/*----------------------------------------------------------------------------------------------------------- */

export function* userSagas(){
    yield all([call(onCheckUserSession), call(onGoogleSignInStart), call(emailPasswordSignIn), call(signOutFromFire), call(signUpEmail) ,call(onSignUpStart)])
}