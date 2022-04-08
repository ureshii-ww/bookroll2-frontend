import { fork } from 'redux-saga/effects';
import { watchLoadUserSettingsAccount, watchUpdatePassword } from './watchers';

export function* userSettingsAccountSaga() {
  yield fork(watchLoadUserSettingsAccount);
  yield fork(watchUpdatePassword);
}