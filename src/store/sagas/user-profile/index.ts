import { all, spawn } from 'redux-saga/effects';
import { userProfileInfoSaga } from './info';
import userProfileBooksSaga from './books';

export function* userProfileSaga() {
  const sagas = [userProfileInfoSaga, userProfileBooksSaga];
  yield all(sagas.map(s => spawn(s)));
}