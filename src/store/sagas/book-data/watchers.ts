import { takeEvery } from 'redux-saga/effects';
import { loadBookData } from '../../reducers/book-data';
import { loadBookDataSaga } from './workers';

export function* watchLoadBookData() {
  yield takeEvery(loadBookData, loadBookDataSaga);
}