import { takeEvery } from 'redux-saga/effects';
import { loadUserSettingsInfo, updateUserSettingsInfo } from '../../../reducers/user-settings/info';
import { loadUserSettingsInfoSaga, updateUserSettingsInfoSaga } from './workers';

export function* watchLoadUserSettingsInfo () {
  yield takeEvery(loadUserSettingsInfo.type, loadUserSettingsInfoSaga);
}

export function* watchUpdateUserSettingsInfo() {
  yield takeEvery(updateUserSettingsInfo.type, updateUserSettingsInfoSaga);
}