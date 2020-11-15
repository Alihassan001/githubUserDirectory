import {
    FETCH_ALL_USER_START,
    FETCH_ALL_USER_SUCCESS,
    FETCH_ALL_USER_FAILURE
} from '../types/fetchAllUserTypes';

const initialState = {
    isLoading: false,
    users: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_USER_START:
            return { ...state, users: [], isLoading: true };
        case FETCH_ALL_USER_SUCCESS:
            return { ...state, users: action.payload.users, isLoading: false };
        case FETCH_ALL_USER_FAILURE:
            return { ...state, users: [], isLoading: false };
        default:
            return state;
    }
};

export default userReducer;