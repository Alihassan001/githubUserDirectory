import {
    FETCH_ALL_USER_START,
    FETCH_ALL_USER_SUCCESS,
    FETCH_ALL_USER_FAILURE
} from '../types/fetchAllUserTypes'

//Service
import { userApi } from '../../service'

//Constant
const { getAllUsers } = userApi

const start = () => ({
    type: FETCH_ALL_USER_START
})

const success = (payload) => ({
    type: FETCH_ALL_USER_SUCCESS,
    payload
})

const failure = () => ({
    type: FETCH_ALL_USER_FAILURE
})

export const userAction = () => {
    return async (dispatch, getState) => {
        if (getState().userReducer.isLoading) return
        dispatch(start())
        try {
            const response = await getAllUsers()
            const result = await response.json()
            
            if (response.status === 200) {
                dispatch(success({
                    users: result
                }))
            } else {
                dispatch(failure())
            }
        } catch (error) {
            dispatch(failure())
        }
    }
}
