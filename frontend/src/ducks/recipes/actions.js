import types from './types';

export default {
  getRecipesRequest() {
    return {
      type: types.GET_RECIPES_REQUEST,
    };
  },

  getRecipesSuccess(payload) {
    return {
      type: types.GET_RECIPES_SUCCESS,
      payload,
    };
  },

  addRecipesRequest(values, actions, res) {
    return {
      type: types.ADD_RECIPES_REQUEST,
      values, actions, res,
    }
  },

  updateRecipesRequest(values, actions, res) {
    return {
      type: types.UPDATE_RECIPES_REQUEST,
      values, actions, res
    };
  },

  deleteRecipesRequest(values, actions, res) {
    return {
      type: types.DELETE_RECIPES_REQUEST,
      values, actions, res
    };
  },
}