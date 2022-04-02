import { spawn, all } from 'redux-saga/effects';
import { userProfileSaga } from './user';

export default function* rootSaga() {
  const sagas = [userProfileSaga];
  yield all(sagas.map(s => spawn(s)));
}