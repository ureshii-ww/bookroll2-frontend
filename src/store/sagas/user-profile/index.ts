import { fork } from 'redux-saga/effects';
import { userProfileInfoSaga } from './info';
import userProfileBooksSaga from './books';

export function* userProfileSaga() {
  yield fork(userProfileInfoSaga);
  yield fork(userProfileBooksSaga);
}