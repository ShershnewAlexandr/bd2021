import { call, all, takeLatest, put, delay } from 'redux-saga/effects';
import types from './types';
import userActions from './actions';
import { api } from "../../utils/api";

function* getUserSaga(action) {
    const req = () => api.get('author/get');
    console.log(action.userId);
    try {
        const response = yield call(req);
        yield delay(1000);
        yield put(userActions.getUserSuccess(response.data));
    } catch (e) {
        alert("error get user data");
        console.log('error', e);
    }
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
        takeLatest(types.GET_USER_REQUEST, getUserSaga),
        takeLatest(types.UPDATE_USER_REQUEST, updateUserSaga),
    ]);
}