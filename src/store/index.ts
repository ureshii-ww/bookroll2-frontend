import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import reducers from './reducers';
import rootSaga from './sagas';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: combineReducers({ ...reducers, router: routerReducer }),
  middleware: [sagaMiddleware, routerMiddleware],
  devTools: true,
});
sagaMiddleware.run(rootSaga);
export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;