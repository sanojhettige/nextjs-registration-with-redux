import has from 'lodash/has';
import * as t from '../store/auth/types';
import { ISSERVER } from '../utils/helpers'
import logger from '../utils/logger';

let userProfile: object | any = {};
let userToken: string | null = null;

export const securityMiddleware = () => (next: any) => (action: any) => {
    logger.log(`Reducer ${action.type}`);
    if (
        action.type === t.SIGNIN_SUCCESS
    ) {
        userToken = action.payload.data;
        localStorage.setItem('token', JSON.stringify(userToken));
        if (!ISSERVER) {
            window.location = `${window.location.origin}`;
        }
    } else if (action.type === t.LOGOUT_REQUEST) {
        userToken = null;
        localStorage.removeItem('token');
        window.location = `${window.location.origin}/signin`;
    }
    // continue processing this action
    return next(action);
};

export const isLoggedIn = (data?: object) => {
    let loggedInToken: object | null = null;

    if (!ISSERVER) {
        loggedInToken = JSON.parse(localStorage.getItem('token'));
    }

    return has(data || loggedInToken, 'access_token');
}