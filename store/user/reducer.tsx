import * as t from './types';

const initialState = {
    isGettingProfile: false,
    errors: {},
    profile: {},
    isValid: true,
};

export default (state = initialState, action: any) => {
    const { payload } = action;
    switch (action.type) {
        case t.GET_PROFILE:
        case t.GET_PROFILE_INITIAL:
            return { ...state, isGettingProfile: true }
        case t.GET_PROFILE_SUCCESS:
        case t.GET_PROFILE_INITIAL_SUCCESS:
            return { ...state, isGettingProfile: false }
        case t.GET_PROFILE_FAILED:
        case t.GET_PROFILE_INITIAL_FAILED:
            return { ...state, isGettingProfile: false }
        default:
            return state;
    }
}