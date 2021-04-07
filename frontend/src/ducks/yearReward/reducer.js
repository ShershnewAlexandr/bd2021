import types from './types';

const initialState = {
  yearRewards: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_YEAR_REWARD_SUCCESS:
      return {
        ...state,
        yearRewards: action.payload
      };

    default:
      return state;
  }
}
