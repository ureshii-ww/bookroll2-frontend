import { fork } from 'redux-saga/effects';
import { watchLoadClubProfileHistory } from './watchers';

export function* clubProfileHistorySaga() {
  yield fork(watchLoadClubProfileHistory);
}