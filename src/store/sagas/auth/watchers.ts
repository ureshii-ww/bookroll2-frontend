import { takeEvery } from 'redux-saga/effects';
import { joinClub, leaveClub, login, logout } from '../../reducers/auth';
import { joinClubSaga, leaveClubSaga, loginSaga, logoutSaga } from './workers';

export function* watchLogin() {
  yield takeEvery(login.type, loginSaga);
}

export function* watchLogout() {
  yield takeEvery(logout.type, logoutSaga);
}

export function* watchJoinClub() {
  yield takeEvery(joinClub.type, joinClubSaga);
}

export function* watchLeaveClub() {
  yield takeEvery(leaveClub.type, leaveClubSaga);
}