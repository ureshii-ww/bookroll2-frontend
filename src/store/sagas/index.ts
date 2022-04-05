import { spawn, all } from 'redux-saga/effects';
import { userProfileSaga } from './user-profile';
import { systemNotificationsSaga } from './system-notifications';

export default function* rootSaga() {
  const sagas = [userProfileSaga, systemNotificationsSaga];
  yield all(sagas.map(s => spawn(s)));
}