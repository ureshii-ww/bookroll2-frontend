import { takeEvery } from 'redux-saga/effects';
import { loadClubProfileMembers } from '../../../reducers/club-profile/members';
import { loadClubProfileMembersSaga } from './workers';

export function* watchLoadClubProfileMembers() {
  yield takeEvery(loadClubProfileMembers.type, loadClubProfileMembersSaga);
}