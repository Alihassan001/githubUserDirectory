import { combineReducers } from 'redux'
import userReducer from './userReducer'
import findUserReducer from './findUserReducer '
import searchUserReducer from './searchUserReducer'

export default combineReducers({
    userReducer,
    findUserReducer,
    searchUserReducer
})