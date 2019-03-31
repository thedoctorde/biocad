import * as types from './actionTypes';

const initialState = {
    username: null,
    isLogging: false,
    loggedIn: false,
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.AUTH_LOGIN_TRY:
            return {
                ...state,
                isLogging: true,
            };
        case types.AUTH_LOGIN_SUCCEED:
            return {
                ...state,
                username: action.payload.username,
                loggedIn: true,
                isLogging: false,
            };
        case types.AUTH_LOGIN_FAILED:
            return {
                ...state,
                isLogging: false,
            };
        default:
            return state;
    }
}