import { takeEvery } from 'redux-saga/effects';
import {
  deleteUserProfileBook,
  loadUserProfileBooks,
  resetUserProfileBooks,
} from '../../../reducers/user-profile/books';
import { deleteUserProfileBookSaga, loadUserProfileBooksSaga, resetUserProfileBooksSaga } from './workers';

export function* watchLoadUserProfileBooks() {
  yield takeEvery(loadUserProfileBooks.type, loadUserProfileBooksSaga);
}

export function* watchResetUserProfileBooks() {
  yield takeEvery(resetUserProfileBooks.type, resetUserProfileBooksSaga);
}

export function* watchDeleteUserProfileBook() {
  yield takeEvery(deleteUserProfileBook.type, deleteUserProfileBookSaga);
}