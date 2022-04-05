import { fork } from 'redux-saga/effects';
import { clubProfileInfoSaga } from './info';
import { clubProfileBooksSaga } from './books';

export function* clubProfileSaga() {
  yield fork(clubProfileInfoSaga);
  yield fork(clubProfileBooksSaga);
}