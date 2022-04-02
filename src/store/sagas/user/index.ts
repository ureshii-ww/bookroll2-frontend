import { fork } from 'redux-saga/effects';
import { watchLoadUserProfileInfo } from './watchers';

export function* userProfileSaga() {
  yield fork(watchLoadUserProfileInfo);
}