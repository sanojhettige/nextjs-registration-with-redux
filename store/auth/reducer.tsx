import isEmpty from 'lodash/isEmpty';
import * as t from './types';
import { isLoggedIn } from '../../lib/security';
import { validateSignUp, validateSignIn, validateForgotPassword, validateResetPassword } from './validation';

const initialState = {
    isFetching: false,
    errors: {},
    isValid: true,
    tokenSent: false,
    resetSuccessful: false,
    isAuthorized: isLoggedIn(),
    registrationSuccessful: false,
};

function isAuthorizationSuccessful(state: any, data: any) {
    const isAuthorized = isLoggedIn(data);
    return { ...state, isFetching: false, isAuthorized };
}

// validate user inputs
function validateForm(state: any, { actionType, data }: any) {
    let errors = {};
    let isValid = false;
    switch (actionType) {
        case 'signin':
            errors = validateSignIn({ ...data });
            break;
        case 'signup':
            errors = validateSignUp({ ...data });
            break;
        case 'forgot':
            errors = validateForgotPassword({ ...data });
            break;
        case 'reset':
            errors = validateResetPassword({ ...data });
            break;
        default:
            errors = {}
            break;
    }

    isValid = isEmpty(errors);
    return { ...state, isValid, errors };
}

export default (state = initialState, action: any) => {
    const { payload } = action;
    switch (action.type) {
        case t.SIGNIN_REQUEST:
            return { ...state, isFetching: true, isAuthorized: false }
        case t.SIGNIN_SUCCESS:
            return isAuthorizationSuccessful(state, payload);
        case t.SIGNIN_FAILED:
            return { ...state, isFetching: false }
        case t.SIGNUP_REQUEST:
            return { ...state, isFetching: true, isAuthorized: false }
        case t.SIGNUP_SUCCESS:
            return { ...state, registrationSuccessful: true }
        case t.SIGNUP_FAILED:
            return { ...state, isFetching: false }
        case t.PASSWORD_TOKEN_REQUEST:
            return { ...state, isFetching: true, tokenSent: false }
        case t.PASSWORD_TOKEN_SUCCESS:
            return { ...state, tokenSent: true, isFetching: false }
        case t.PASSWORD_TOKEN_FAILED:
            return { ...state, isFetching: false, tokenSent: false }
        case t.PASSWORD_RESET_REQUEST:
            return { ...state, isFetching: true, resetSuccessful: false }
        case t.PASSWORD_RESET_SUCCESS:
            return { ...state, resetSuccessful: true, isFetching: false }
        case t.PASSWORD_RESET_FAILED:
            return { ...state, isFetching: false, resetSuccessful: false }
        case t.LOGOUT_REQUEST:
            return { ...state }
        case t.VALIDATE_FORM:
            return validateForm(state, action);
        default:
            return state;
    }
}