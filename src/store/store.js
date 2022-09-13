import { compose, createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './rootReducer'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './rootSaga'


const sagaMiddleware = createSagaMiddleware()

const middleWares = [process.env.NODE_ENV==='development' && logger,sagaMiddleware].filter(Boolean)

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig,rootReducer)


const composedEnhancers = compose(applyMiddleware(...middleWares))


export const store = createStore(persistedReducer,undefined, composedEnhancers )

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)