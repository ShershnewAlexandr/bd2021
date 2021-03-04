import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router'
import loginReducer from '../login/reducer';
import userReducer from '../user/reducer';

export default (history) => combineReducers({
    login: loginReducer,
    user: userReducer,
    form,
    router: connectRouter(history),
});
