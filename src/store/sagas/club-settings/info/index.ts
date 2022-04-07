import { fork } from 'redux-saga/effects';
import { watchLoadClubSettingsInfo, watchUpdateClubSettingsInfo } from './watchers';

export function* clubSettingsInfoSaga() {
  yield fork(watchLoadClubSettingsInfo);
  yield fork(watchUpdateClubSettingsInfo);
}