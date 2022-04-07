import { fork } from 'redux-saga/effects';
import { clubSettingsInfoSaga } from './info';

export function* clubSettingsSaga() {
  yield fork(clubSettingsInfoSaga);
}