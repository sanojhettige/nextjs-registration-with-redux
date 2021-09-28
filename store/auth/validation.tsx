import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import { emailRegex } from '../../utils/regex';

export const validateSignUp = ({ name, email, password, passwordConfirmation }: any) => {
    let errors = {} as any;
    if (isEmpty(name)) {
        errors.name = 'Name is required.';
    }

    if (isEmpty(email)) {
        errors.email = 'Email address is required.';
    }
    if (!emailRegex.test(String(email).toLowerCase())) {
        errors.email = 'Enter a valid email address.';
    }

    if (isEmpty(password)) {
        errors.password = 'Password is required.';
    }

    if (isEmpty(passwordConfirmation)) {
        errors.passwordConfirmation = 'Password Confirmation is required.';
    }

    if (!isEqual(password, passwordConfirmation)) {
        errors.passwordConfirmation = 'Password Confirmation is not match.';
    }

    return errors;
}

export const validateSignIn = ({ username, password }: any) => {
    let errors = {} as any;
    if (isEmpty(username)) {
        errors.username = 'Username is required.';
    }

    if (isEmpty(password)) {
        errors.password = 'Password is required.';
    }
    return errors;
}

export const validateForgotPassword = ({ email }: any) => {
    let errors = {} as any;
    if (isEmpty(email)) {
        errors.email = 'Email address is required.'
    }
    if (!emailRegex.test(String(email).toLowerCase())) {
        errors.email = 'Enter a valid email address.';
    }
    return errors;
}

export const validateResetPassword = ({ email, password, passwordConfirmation, token }: any) => {
    let errors = {} as any;
    if (isEmpty(email)) {
        errors.email = 'Email is required.';
    }

    if (!emailRegex.test(String(email).toLowerCase())) {
        errors.email = 'Enter a valid email address.';
    }

    if (isEmpty(password)) {
        errors.password = 'Password is required.';
    }

    if (isEmpty(passwordConfirmation)) {
        errors.passwordConfirmation = 'Password Confirmation is required.';
    }

    if (!isEqual(password, passwordConfirmation)) {
        errors.passwordConfirmation = 'Password Confirmation is not match.';
    }

    if (isEmpty(token)) {
        errors.token = 'Reset Token is required.'
    }

    return errors;
}