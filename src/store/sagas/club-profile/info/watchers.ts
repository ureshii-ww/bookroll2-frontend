import { takeEvery } from 'redux-saga/effects';
import { loadClubProfileInfo } from '../../../reducers/club-profile/info';
import { loadClubProfileInfoSaga } from './workers';

export function* watchLoadClubProfileInfo() {
  yield takeEvery(loadClubProfileInfo.type, loadClubProfileInfoSaga);
}