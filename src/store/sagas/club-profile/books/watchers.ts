import { takeEvery } from 'redux-saga/effects';
import { deleteClubProfileBook, loadClubProfileBooks } from '../../../reducers/club-profile/books';
import { deleteClubProfileBookSaga, loadClubProfileBooksSaga } from './workers';

export function* watchLoadClubProfileBooks() {
  yield takeEvery(loadClubProfileBooks.type, loadClubProfileBooksSaga);
}

export function* watchDeleteClubProfileBook() {
  yield takeEvery(deleteClubProfileBook.type, deleteClubProfileBookSaga);
}