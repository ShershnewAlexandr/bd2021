import { call, all } from 'redux-saga/effects';
import loginSagas from '../login/sagas';
import userSagas from '../user/sagas';
import ingredientsSagas from '../ingredients/sagas';

export default function*() {
    yield all([call(loginSagas), call(userSagas), call(ingredientsSagas)]);
}
