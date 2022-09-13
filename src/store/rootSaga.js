import { all, call } from 'redux-saga/effects'
import { categoriesSaga } from './category/category.saga'
import { userSagas } from './user/userSaga'


export function* rootSaga(){
    yield all([call(categoriesSaga), call(userSagas)])
}