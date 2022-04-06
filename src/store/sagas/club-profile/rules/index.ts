import { fork } from 'redux-saga/effects';
import { watchLoadClubProfileRules } from './watchers';

export function* clubProfileRulesSaga() {
  yield fork(watchLoadClubProfileRules);
}