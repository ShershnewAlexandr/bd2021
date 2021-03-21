import { call, all, takeLatest, put, delay } from 'redux-saga/effects';
import types from './types';
import userActions from './actions';
import { api } from "../../utils/api";

function* getIngredientsSaga(action) {
  const req = () => api.get('ingredient/get');
  try {
    const response = yield call(req);
    yield delay(1000);
    yield put(userActions.getIngredientsSuccess(response.data));
  } catch (e) {
    console.log('error', e);
  }
}

function* addIngredientsSaga(action) {
  const { values, actions, res } = action;
  const req = () => api.post('ingredient/create', values);
  try {
    const response = yield call(req);
    yield put(userActions.getIngredientsSuccess(response.data));
    yield call(getIngredientsSaga);
  } catch (e) {
    console.log('error', e);
  }
  res();
}

function* updateUserSaga(action) {
  const { values, actions, res } = action;
  const req = () => api.put('author/update', values);
  try {
    yield delay(1000);
    const response = yield call(req);
    yield put(userActions.getUserSuccess(response.data));
  } catch (e) {
    alert("Ошибка обновления");
    console.log('error', e);
  }
  res();
}

export default function*() {
  yield all([
    takeLatest(types.GET_INGREDIENTS_REQUEST, getIngredientsSaga),
    takeLatest(types.ADD_INGREDIENTS_REQUEST, addIngredientsSaga),
  ]);
}