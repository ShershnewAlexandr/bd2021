import types from './types';

const initialState = {
  recipes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.payload
      };

    default:
      return state;
  }
}
