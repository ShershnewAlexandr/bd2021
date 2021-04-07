import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router'
import loginReducer from '../login/reducer';
import userReducer from '../user/reducer';
import ingredientsReducer from '../ingredients/reducer';
import yearRewardReducer from '../yearReward/reducer';
import recipesReducer from '../recipes/reducer';

export default (history) => combineReducers({
    ingredients: ingredientsReducer,
    yearRewards: yearRewardReducer,
    recipes: recipesReducer,
    login: loginReducer,
    user: userReducer,
    form,
    router: connectRouter(history),
});
