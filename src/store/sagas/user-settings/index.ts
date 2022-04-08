import { fork } from 'redux-saga/effects';
import { userSettingsInfoSaga } from './info';
import { userSettingsAccountSaga } from './account';

export function* userSettingsSaga() {
  yield fork(userSettingsInfoSaga);
  yield fork(userSettingsAccountSaga);
}