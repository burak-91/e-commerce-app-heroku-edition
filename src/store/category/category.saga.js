import { takeLatest, all, call, put } from 'redux-saga/effects'
import { actionTypes } from './actionTypes';
import { getCategoriesAndDocuments } from '../../firebase/firebase';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './categoryAction';



export function* fetchCategoriesAsync(){
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories')
        yield put(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        yield put(fetchCategoriesFailed(error))
    }

}
export function* onFetchCategories(){
    yield takeLatest(actionTypes.FETCH_CATEGORIES_START, fetchCategoriesAsync )
}

export function* categoriesSaga(){
    yield all([call(onFetchCategories)])
}

