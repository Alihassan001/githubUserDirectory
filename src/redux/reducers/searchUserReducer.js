import {
    SEARCH_USER_START,
    SEARCH_USER_SUCCESS,
    SEARCH_USER_FAILURE
} from '../types/searchUserTypes'

const initialState = {
    searchUserIsLoading: false,
    user: {},
};

const searchUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_USER_START:
            return { ...state, user: {}, searchUserIsLoading: true };
        case SEARCH_USER_SUCCESS:
            return { ...state, user: action.payload.user, searchUserIsLoading: false };
        case SEARCH_USER_FAILURE:
            return { ...state, user: {}, searchUserIsLoading: false };
        default:
            return state;
    }
};

export default searchUserReducer;