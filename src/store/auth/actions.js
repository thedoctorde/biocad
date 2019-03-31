import * as types from './actionTypes';

import authService from '../../services/auth';

export function loginTry(username, password) {
    return async(dispatch) => {
        try {
            const authData = await authService.Login(username, password);
            if (authData.username) {
                debugger;
                dispatch(loginSucceed(username))
            }  else {
                dispatch(loginFailed());
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export function loginSucceed(username) {
    return({
        type: types.AUTH_LOGIN_SUCCEED,
        payload: {
            username,
        }
    });
}

export function loginFailed() {
    return({
        type: types.AUTH_LOGIN_FAILED,
    });
}