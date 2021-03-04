import types from './types';

const initialState = {
    user: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload
            };

        default:
            return state;
    }
}
