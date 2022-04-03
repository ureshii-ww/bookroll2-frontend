import { fork } from 'redux-saga/effects';
import { watchLoadUserProfileInfo } from './watchers';

export function* userProfileInfoSaga() {
  yield fork(watchLoadUserProfileInfo)
}