import { fork } from 'redux-saga/effects';
import { clubWheelBooksListSaga } from './books-list';

export function* clubWheelSaga() {
  yield fork(clubWheelBooksListSaga);
}