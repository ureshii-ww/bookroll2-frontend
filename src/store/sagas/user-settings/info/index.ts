import { fork } from 'redux-saga/effects';
import { watchLoadUserSettingsInfo, watchUpdateUserSettingsInfo } from './watchers';

export function* userSettingsInfoSaga() {
  yield fork(watchLoadUserSettingsInfo);
  yield fork(watchUpdateUserSettingsInfo);
}