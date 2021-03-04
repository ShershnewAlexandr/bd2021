import types from './types';

export default {
    loginRequest(values, actions, res) {
        return {
            type: types.LOGIN_REQUEST,
            values, actions, res
        };
    },

    registerRequest(values, actions, res) {
        return {
            type: types.REGISTER_REQUEST,
            values, actions, res
        };
    },

    logoutRequest() {
        return {
            type: types.LOGOUT_REQUEST
        };
    },
}