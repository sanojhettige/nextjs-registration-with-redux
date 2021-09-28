import * as t from "./types";
import request from '../../utils/request';

/*
 * do the user authorization
 * @param {string} username - email or username of the user
 * @param {string} password - registered password
 * @return {object} res
 */
export const doSignIn = (username: string, password: string) => async (dispatch: any, getState: any) => {
    // first do the validation
    dispatch({ type: t.VALIDATE_FORM, actionType: 'signin', data: { username, password } });

    const { auth: { isValid } } = getState();
    if (isValid) {
        dispatch({ type: t.SIGNIN_REQUEST });
        return await request({
            url: `/signin`,
            method: 'get',
            data: { username, password },
        })
            .then(res => {
                dispatch({ type: t.SIGNIN_SUCCESS, payload: res });
                return res;
            })
            .catch(error => {
                dispatch({ type: t.SIGNIN_FAILED });
                return error;
            });
    }
    return null;

};

/*
 * register a new user to the system without verification
 * @param {string} name - full name of the user
 * @param {string} email - email address user wish to register with
 * @return {object} res
 */
export const doSignUp = (name: string, email: string, password: string, passwordConfirmation: string) => async (dispatch: any, getState: any) => {
    // first do the validation
    dispatch({ type: t.VALIDATE_FORM, actionType: 'signup', data: { name, email, password, passwordConfirmation } });

    const { auth: { isValid } } = getState();
    if (isValid) {
        dispatch({ type: t.SIGNUP_REQUEST });
        return await request({
            url: `/signup`,
            method: 'post',
            data: { name, email, password, passwordConfirmation },
        })
            .then(res => {
                dispatch({ type: t.SIGNUP_SUCCESS, payload: res });
                return res;
            })
            .catch(error => {
                dispatch({ type: t.SIGNUP_FAILED });
                return error;
            });
    }

    return null;
};

/*
 * create a password reset token and send to user's email
 * @param {string} email - registered email address of the user
 * @return {object} res
 */
export const sendPasswordResetToken = (email: string) => async (dispatch: any, getState: any) => {
    // first do the validation
    dispatch({ type: t.VALIDATE_FORM, actionType: 'forgot', data: { email } });

    const { auth: { isValid } } = getState();
    if (isValid) {
        dispatch({ type: t.PASSWORD_TOKEN_REQUEST });
        return await request({
            url: `/forgotPassword`,
            method: 'post',
            data: { email },
        })
            .then(res => {
                dispatch({ type: t.PASSWORD_TOKEN_SUCCESS, payload: res });
                return res;
            })
            .catch(error => {
                dispatch({ type: t.PASSWORD_TOKEN_FAILED });
                return error;
            });
    }
    return null;
};

/*
 * change user password using provided token in sendPasswordResetToken
 * @param {string} email - registered email address of the user
 * @param {string} password - new password
 * @params {string} passwordConfirmation - re-type confirmation of the password
 * @parasm {string} token - token received from the previour action (sendPasswordResetToken)
 * @return {object} res
 */
export const doPasswordReset = (email: string, password: string, passwordConfirmation: string, token: string) => async (dispatch: any, getState: any) => {
    // first do the validation
    dispatch({ type: t.VALIDATE_FORM, actionType: 'reset', data: { email, password, passwordConfirmation, token } });
    const { auth: { isValid } } = getState();
    if (isValid) {
        dispatch({ type: t.PASSWORD_RESET_REQUEST });
        return await request({
            url: `/resetPassword/${token}`,
            method: 'post',
            data: { password, passwordConfirmation, token, email },
        })
            .then(res => {
                dispatch({ type: t.PASSWORD_RESET_SUCCESS, payload: res });
                return res;
            })
            .catch(error => {
                dispatch({ type: t.PASSWORD_RESET_FAILED });
                return error;
            });
    }
    return null;
};

export const signOut = () => async (dispatch: any) => {
    dispatch({ type: t.LOGOUT_REQUEST });
}