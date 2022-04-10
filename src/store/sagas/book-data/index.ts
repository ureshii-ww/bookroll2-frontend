import { fork } from 'redux-saga/effects';
import { watchLoadBookData } from './watchers';

export function* bookDataSaga() {
  yield fork(watchLoadBookData);
}