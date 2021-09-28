import * as t from "./types";
import request from '../../utils/request';

/*
 * get user profile
 * @return {object} res
 */
export const getProfile = () => async (dispatch: any, getState: any) => {

    const { auth: { isGettingProfile } } = getState();

    if (!isGettingProfile) {
        dispatch({ type: t.GET_PROFILE });
        return await request({
            url: `/profile`,
            method: 'get',
        })
            .then(res => {
                dispatch({ type: t.GET_PROFILE_SUCCESS, payload: res });
                return res;
            })
            .catch(error => {
                dispatch({
                    type: t.GET_PROFILE_FAILED
                });
                return error;
            });
    }

};