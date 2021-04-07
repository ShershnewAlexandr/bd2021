import { call, all, takeLatest, put, delay } from 'redux-saga/effects';
import types from './types';
import userActions from './actions';
import { api } from "../../utils/api";

function* getYearRewardSaga(action) {
  const req = () => api.get('yearReward/get');
  try {
    const response = yield call(req);
    yield delay(1000);
    yield put(userActions.getYearRewardSuccess(response.data));
  } catch (e) {
    console.log('error', e);
  }
}

function* addYearRewardSaga(action) {
  const { values, actions, res } = action;
  let json;
  try {
    json = JSON.stringify(JSON.parse(values.description));
  } catch {
    json = "";
  }
  const req = () => api.post('yearReward/create', { ...values, description: json});
  try {
    const response = yield call(req);
    yield call(getYearRewardSaga);
  } catch (e) {
    console.log('error', e);
  }
  res();
}

function* updateYearRewardSaga(action) {
  const { values, actions, res } = action;
  let json;
  try {
    json = JSON.stringify(JSON.parse(values.description));
  } catch {
    json = "";
  }
  const req = () => api.put('yearReward/update', { ...values, description: json});
  try {
    yield delay(1000);
    const response = yield call(req);
    yield call(getYearRewardSaga);
  } catch (e) {
    alert("Ошибка обновления");
    console.log('error', e);
  }
  res();
}

function* deleteYearRewardSaga(action) {
  const { values, actions, res } = action;
  const req = () => api.post('yearReward/delete', values);
  try {
    yield delay(1000);
    const response = yield call(req);
    yield call(getYearRewardSaga);
  } catch (e) {
    alert("Ошибка обновления");
    console.log('error', e);
  }
  res();
}

export default function*() {
  yield all([
    takeLatest(types.GET_YEAR_REWARD_REQUEST, getYearRewardSaga),
    takeLatest(types.ADD_YEAR_REWARD_REQUEST, addYearRewardSaga),
    takeLatest(types.UPDATE_YEAR_REWARD_REQUEST, updateYearRewardSaga),
    takeLatest(types.DELETE_YEAR_REWARD_REQUEST, deleteYearRewardSaga),
  ]);
}