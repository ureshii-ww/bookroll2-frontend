import { watchJoinClub, watchLeaveClub, watchLogin, watchLogout } from './watchers';
import { fork } from 'redux-saga/effects';

export function* authSaga() {
  yield fork(watchLogin);
  yield fork(watchLogout);
  yield fork(watchJoinClub);
  yield fork(watchLeaveClub);
}