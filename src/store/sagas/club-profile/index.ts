import { fork } from 'redux-saga/effects';
import { clubProfileInfoSaga } from './info';

export function* clubProfileSaga() {
  yield fork(clubProfileInfoSaga)
}