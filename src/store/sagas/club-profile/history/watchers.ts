import { takeEvery } from 'redux-saga/effects';
import { loadClubProfileHistory } from '../../../reducers/club-profile/history';
import { loadClubProfileHistorySaga } from './workers';

export function* watchLoadClubProfileHistory() {
  yield takeEvery(loadClubProfileHistory, loadClubProfileHistorySaga);
}