import types from './types';

const initialState = {
  ingredients: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: action.payload
      };

    default:
      return state;
  }
}
