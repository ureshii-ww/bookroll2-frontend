import { fork } from 'redux-saga/effects';
import { userSettingsInfoSaga } from './info';

export function* userSettingsSaga() {
  yield fork(userSettingsInfoSaga);
}