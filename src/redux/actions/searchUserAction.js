import {
    SEARCH_USER_START,
    SEARCH_USER_SUCCESS,
    SEARCH_USER_FAILURE
} from '../types/searchUserTypes'

//Service
import { userApi } from '../../service'

//Constant
const { searchUser } = userApi

const start = () => ({
    type: SEARCH_USER_START
})

const success = (payload) => ({
    type: SEARCH_USER_SUCCESS,
    payload
})

const failure = () => ({
    type: SEARCH_USER_FAILURE
})

export const searchUserAction = (name) => {
    return async (dispatch, getState) => {
        if (getState().searchUserReducer.searchUserIsLoading) return dispatch(start())
        try {
            const response = await searchUser(name)
            const result = await response.json()
            
            if (response.status === 200) {
                dispatch(success({
                    user: result
                }))
            } else {
                dispatch(failure())
            }
        } catch (error) {
            dispatch(failure())
        }
    }
}
