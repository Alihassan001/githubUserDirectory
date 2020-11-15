import {
    FIND_USER_START,
    FIND_USER_SUCCESS,
    FIND_USER_FAILURE
} from '../types/findUserTypes'

//Service
import { userApi } from '../../service'

//Constant
const { searchUser } = userApi

const start = () => ({
    type: FIND_USER_START
})

const success = (payload) => ({
    type: FIND_USER_SUCCESS,
    payload
})

const failure = () => ({
    type: FIND_USER_FAILURE
})

export const findUserAction = (name) => {
    return async (dispatch, getState) => {
        if (getState().findUserReducer.userIsLoading) return
        dispatch(start())
        try {
            const response = await searchUser(name)
            const result = await response.json()
            console.log("findUserAction -> result", result)
            
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
