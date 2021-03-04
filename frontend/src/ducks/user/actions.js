import types from './types';

export default {
    getUserRequest(userId) {
        return {
            type: types.GET_USER_REQUEST,
            userId
        };
    },

    getUserSuccess(payload) {
        return {
            type: types.GET_USER_SUCCESS,
            payload
        };
    },

    updateUserRequest(values, actions, res) {
        return {
            type: types.UPDATE_USER_REQUEST,
            values, actions, res
        };
    },
}