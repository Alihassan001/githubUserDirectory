import {
    FIND_USER_START,
    FIND_USER_SUCCESS,
    FIND_USER_FAILURE
} from '../types/findUserTypes'

const initialState = {
    userIsLoading: false,
    user: {},
};

const findUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_USER_START:
            return { ...state, user: {}, userIsLoading: true };
        case FIND_USER_SUCCESS:
            return { ...state, user: action.payload.user, userIsLoading: false };
        case FIND_USER_FAILURE:
            return { ...state, user: {}, userIsLoading: false };
        default:
            return state;
    }
};

export default findUserReducer;