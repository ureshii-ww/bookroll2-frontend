import { fork } from 'redux-saga/effects';
import { watchAddSystemNotification } from './watchers';

export function* systemNotificationsSaga() {
  yield fork(watchAddSystemNotification)
}