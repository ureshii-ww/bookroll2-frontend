import { spawn, all } from 'redux-saga/effects';
import { userProfileSaga } from './user-profile';
import { systemNotificationsSaga } from './system-notifications';
import { clubProfileSaga } from './club-profile';
import { clubSettingsSaga } from './club-settings';

export default function* rootSaga() {
  const sagas = [userProfileSaga, clubProfileSaga, clubSettingsSaga, systemNotificationsSaga];
  yield all(sagas.map(s => spawn(s)));
}