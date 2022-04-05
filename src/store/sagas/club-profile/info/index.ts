import { fork } from 'redux-saga/effects';
import { watchLoadClubProfileInfo } from './watchers';

export function* clubProfileInfoSaga() {
  yield fork(watchLoadClubProfileInfo);
}