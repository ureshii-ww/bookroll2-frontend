import { takeEvery } from 'redux-saga/effects';
import { deleteUserProfileBook, loadUserProfileBooks } from '../../../reducers/user-profile/books';
import { deleteUserProfileBookSaga, loadUserProfileBooksSaga } from './workers';

export function* watchLoadUserProfileBooks() {
  yield takeEvery(loadUserProfileBooks.type, loadUserProfileBooksSaga);
}

export function* watchDeleteUserProfileBook() {
  yield takeEvery(deleteUserProfileBook.type, deleteUserProfileBookSaga);
}