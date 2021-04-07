import types from './types';

export default {
  getYearRewardRequest() {
    return {
      type: types.GET_YEAR_REWARD_REQUEST,
    };
  },

  getYearRewardSuccess(payload) {
    return {
      type: types.GET_YEAR_REWARD_SUCCESS,
      payload,
    };
  },

  addYearRewardRequest(values, actions, res) {
    return {
      type: types.ADD_YEAR_REWARD_REQUEST,
      values, actions, res,
    }
  },

  updateYearRewardRequest(values, actions, res) {
    return {
      type: types.UPDATE_YEAR_REWARD_REQUEST,
      values, actions, res
    };
  },

  deleteYearRewardRequest(values, actions, res) {
    return {
      type: types.DELETE_YEAR_REWARD_REQUEST,
      values, actions, res
    };
  },
}