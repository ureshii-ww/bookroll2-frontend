import { fork } from 'redux-saga/effects';
import { watchLoadClubWheelBooks } from './watchers';

export function* clubWheelBooksListSaga() {
  yield fork(watchLoadClubWheelBooks);
}