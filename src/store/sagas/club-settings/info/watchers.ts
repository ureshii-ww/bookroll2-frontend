import { takeEvery } from 'redux-saga/effects';
import { loadClubSettingsInfo, updateClubSettingsInfo } from '../../../reducers/club-settings/info';
import { loadClubSettingsInfoSaga, updateClubSettingsInfoSaga } from './workers';

export function* watchLoadClubSettingsInfo() {
  yield takeEvery(loadClubSettingsInfo.type, loadClubSettingsInfoSaga);
}

export function* watchUpdateClubSettingsInfo() {
  yield takeEvery(updateClubSettingsInfo.type, updateClubSettingsInfoSaga);
}