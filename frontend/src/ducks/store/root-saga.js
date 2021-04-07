import {call, all} from 'redux-saga/effects';
import loginSagas from '../login/sagas';
import userSagas from '../user/sagas';
import ingredientsSagas from '../ingredients/sagas';
import yearRewardSagas from '../yearReward/sagas';
import recipesSagas from '../recipes/sagas';

export default function* () {
  yield all([
    call(loginSagas),
    call(userSagas),
    call(ingredientsSagas),
    call(yearRewardSagas),
    call(recipesSagas)
  ]);
}
