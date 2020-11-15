import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import allReducers from '../redux/reducers'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist : ['applyCouponReducer']
}

const persistedReducer = persistReducer(persistConfig, allReducers)

const middleware = [thunk]
const store = createStore(persistedReducer, {}, compose(
    applyMiddleware(...middleware)
))

const persistor = persistStore(store, {}, () => {
    console.log('running')
})

export {
    store,
    persistor
}