import { spawn, all } from 'redux-saga/effects';
import { userProfileSaga } from './user-profile';
import { systemNotificationsSaga } from './system-notifications';
import { clubProfileSaga } from './club-profile';

export default function* rootSaga() {
  const sagas = [userProfileSaga, clubProfileSaga, systemNotificationsSaga];
  yield all(sagas.map(s => spawn(s)));
}