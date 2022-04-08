import { takeEvery } from 'redux-saga/effects';
import { loadClubWheelBooks } from '../../../reducers/club-wheel/books-list';
import { loadClubWheelBooksSaga } from './workers';

export function* watchLoadClubWheelBooks() {
  yield takeEvery(loadClubWheelBooks.type, loadClubWheelBooksSaga);
}