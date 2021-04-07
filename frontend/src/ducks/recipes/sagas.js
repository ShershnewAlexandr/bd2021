import { call, all, takeLatest, put, delay } from 'redux-saga/effects';
import types from './types';
import userActions from './actions';
import { api } from "../../utils/api";

function* getRecipesSaga(action) {
  const req = () => api.get('recipe/get');
  try {
    const response = yield call(req);
    yield delay(1000);
    yield put(userActions.getRecipesSuccess(response.data));
  } catch (e) {
    console.log('error', e);
  }
}

function* addRecipesSaga(action) {
  const { values, actions, res } = action;
  const req = () => api.post('recipe/create', values);
  try {
    const response = yield call(req);
    yield call(getRecipesSaga);
  } catch (e) {
    console.log('error', e);
  }
  res();
}

function* updateRecipesSaga(action) {
  const { values, actions, res } = action;
  const req = () => api.put('recipe/update', values);
  try {
    yield delay(1000);
    const response = yield call(req);
    yield call(getRecipesSaga);
  } catch (e) {
    alert("Ошибка обновления");
    console.log('error', e);
  }
  res();
}

function* deleteRecipesSaga(action) {
  const { values, actions, res } = action;
  const req = () => api.post('recipe/delete', values);
  try {
    yield delay(1000);
    const response = yield call(req);
    yield call(getRecipesSaga);
  } catch (e) {
    alert("Ошибка обновления");
    console.log('error', e);
  }
  res();
}

export default function*() {
  yield all([
    takeLatest(types.GET_RECIPES_REQUEST, getRecipesSaga),
    takeLatest(types.ADD_RECIPES_REQUEST, addRecipesSaga),
    takeLatest(types.UPDATE_RECIPES_REQUEST, updateRecipesSaga),
    takeLatest(types.DELETE_RECIPES_REQUEST, deleteRecipesSaga),
  ]);
}