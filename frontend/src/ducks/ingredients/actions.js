import types from './types';

export default {
  getIngredientsRequest() {
    return {
      type: types.GET_INGREDIENTS_REQUEST,
    };
  },

  getIngredientsSuccess() {
    return {
      type: types.GET_INGREDIENTS_SUCCESS,
    };
  },

  addIngredientsRequest(values, actions, res) {
    return {
      type: types.ADD_INGREDIENTS_REQUEST,
      values, actions, res,
    }
  },

  updateIngredientsRequest(values, actions, res) {
    return {
      type: types.UPDATE_INGREDIENTS_REQUEST,
      values, actions, res
    };
  },

  deleteIngredientsRequest(ingredientId) {
    return {
      type: types.GET_USER_SUCCESS,
      ingredientId
    };
  },
}