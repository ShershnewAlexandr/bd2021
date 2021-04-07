import types from './types';

export default {
  getIngredientsRequest() {
    return {
      type: types.GET_INGREDIENTS_REQUEST,
    };
  },

  getIngredientsSuccess(payload) {
    return {
      type: types.GET_INGREDIENTS_SUCCESS,
      payload,
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

  deleteIngredientsRequest(values, actions, res) {
    return {
      type: types.DELETE_INGREDIENTS_REQUEST,
      values, actions, res
    };
  },
}