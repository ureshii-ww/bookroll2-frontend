import { takeEvery } from 'redux-saga/effects';
import { confirmRandomBook, loadRandomBook } from '../../reducers/random-book';
import { confirmRandomBookSaga, loadRandomBookSaga } from './workers';

export function* watchLoadRandomBook() {
  yield takeEvery(loadRandomBook.type, loadRandomBookSaga);
}

export function* watchConfirmRandomBook() {
  yield takeEvery(confirmRandomBook.type, confirmRandomBookSaga);
}