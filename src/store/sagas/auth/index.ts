import { watchCreateClub, watchJoinClub, watchLeaveClub, watchLogin, watchLogout, watchRegister } from './watchers';
import { fork } from 'redux-saga/effects';

export function* authSaga() {
  yield fork(watchLogin);
  yield fork(watchRegister);
  yield fork(watchLogout);
  yield fork(watchJoinClub);
  yield fork(watchLeaveClub);
  yield fork(watchCreateClub);
}