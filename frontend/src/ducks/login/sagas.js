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
        localStorage.setItem('auth', JSON.stringify(response.data));
        apiSetToken(response.data.token);
        if (response.data.role === 'admin') {
            yield put(push(createRoute.ADMIN(response.data.userId)))
        } else {
            yield put(push(createRoute.USER(response.data.userId)))
        }
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
    localStorage.setItem("auth", "");
    yield put(push(routes.SIGNIN));
}

function* autoLogin(){
    const auth = localStorage.getItem('auth');
    if (!auth) {
        yield put(push(routes.SIGNIN));
    } else {
        const authData = JSON.parse(auth);
        apiSetToken(authData.token);
        if (authData.role === 'admin') {
            yield put(push(createRoute.ADMIN(authData.userId)))
        } else {
            yield put(push(createRoute.USER(authData.userId)))
        }
    }
}

export default function*() {
    yield all([
        call(autoLogin),
        takeLatest(types.LOGIN_REQUEST, loginSaga),
        takeLatest(types.REGISTER_REQUEST, registerSaga),
        takeLatest(types.LOGOUT_REQUEST, logoutSaga)
    ]);
}