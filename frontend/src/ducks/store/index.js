import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const initialState = {};

export const history = createBrowserHistory();

const browserRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middleware = [browserRouterMiddleware, sagaMiddleware];

const store = createStore(
    rootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
