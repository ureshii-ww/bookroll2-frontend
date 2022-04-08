import { fork } from 'redux-saga/effects';
import { watchConfirmRandomBook, watchLoadRandomBook } from './watchers';

export function* randomBookSaga() {
  yield fork(watchLoadRandomBook);
  yield fork(watchConfirmRandomBook);
}