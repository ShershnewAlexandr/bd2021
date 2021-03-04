import { call, all, takeLatest, put, delay } from 'redux-saga/effects';
import types from './types';
import { push } from 'connected-react-router';
import userActions from './actions';
import {createRoute, routes} from "../../utils/constants";
import { api } from "../../utils/api";

function* getUserSaga(action) {
    const req = () => api.post('info/get', {
        userId: action.userId
    });
    console.log(action.userId);
    try {
        const response = yield call(req);
        yield put(userActions.getUserSuccess(response.data));
    } catch (e) {
        alert("error get user data");
        console.log('error', e);
    }
}

function* updateUserSaga(action) {
    const { values, actions, res } = action;
    const req = () => api.post('info/update', values);
    try {
        yield delay(1000);
        const response = yield call(req);
        alert("Данные обнавлены");
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