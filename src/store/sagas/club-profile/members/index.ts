import { fork } from 'redux-saga/effects';
import { watchLoadClubProfileMembers } from './watchers';

export function* clubProfileMembersSaga() {
  yield fork(watchLoadClubProfileMembers);
}