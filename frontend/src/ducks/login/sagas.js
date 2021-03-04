import { call, all, takeLatest, put, delay } from 'redux-saga/effects';
import types from './types';
import { push } from 'connected-react-router';
import {createRoute, routes} from "../../utils/constants";
import { api, apiSetToken} from "../../utils/api";

function* loginSaga(action) {
    const { values, actions, res } = action;
    const req = () => api.post('auth/login', values);
    try {
        yield delay(1000);
        const response = yield call(req);
        apiSetToken(response.data.token);
        yield put(push(createRoute.EDIT(response.data.userId)))
    } catch (e) {
        actions.setErrors({
            common: "Неверный логин или пароль"
        });
    }
    res();
}

function* registerSaga(action) {
    const { values, actions, res } = action;
    const req = () => api.post('auth/register', values);
    try {
        yield delay(1000);
        const response = yield call(req);
        yield put(push(routes.SIGNIN));
    } catch (e) {
        actions.setErrors({
            common: e.response.data.message
        });
    }
    res();
}

function* logoutSaga(){
    localStorage.setItem("token", "");
    yield put(push(routes.SIGNIN));
}

export default function*() {
    yield all([
        // call(autoLogin),
        takeLatest(types.LOGIN_REQUEST, loginSaga),
        takeLatest(types.REGISTER_REQUEST, registerSaga),
        takeLatest(types.LOGOUT_REQUEST, logoutSaga)
    ]);
}