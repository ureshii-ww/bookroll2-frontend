import { fork } from 'redux-saga/effects';
import { clubWheelBooksListSaga } from './books-list';
import { clubWheelWinnerSaga } from './wheel-winner';

export function* clubWheelSaga() {
  yield fork(clubWheelBooksListSaga);
  yield fork(clubWheelWinnerSaga);
}