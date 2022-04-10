import { spawn, all } from 'redux-saga/effects';
import { userProfileSaga } from './user-profile';
import { systemNotificationsSaga } from './system-notifications';
import { clubProfileSaga } from './club-profile';
import { clubSettingsSaga } from './club-settings';
import { userSettingsSaga } from './user-settings';
import { authSaga } from './auth';
import { randomBookSaga } from './random-book';
import { clubWheelSaga } from './club-wheel';
import { bookDataSaga } from './book-data';

export default function* rootSaga() {
  const sagas = [
    authSaga,
    userProfileSaga,
    clubProfileSaga,
    randomBookSaga,
    clubSettingsSaga,
    userSettingsSaga,
    clubWheelSaga,
    systemNotificationsSaga,
    bookDataSaga,
  ];
  yield all(sagas.map(s => spawn(s)));
}
