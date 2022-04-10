import {
  loadBookData,
  loadBookDataFailure,
  loadBookDataSuccess,
} from '../../reducers/book-data';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { addSystemNotification } from '../../reducers/system-notifications';
import BookService from '../../../services/book.service';

export function* loadBookDataSaga(action: ReturnType<typeof loadBookData>) {
  const bookId: string = action.payload;
  try {
    const response: Awaited<ReturnType<typeof BookService.getBookData>> = yield call(
      BookService.getBookData,
      bookId
    );
    yield put(loadBookDataSuccess(response.data));
  } catch (error) {
    if(axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
    }
    yield put(loadBookDataFailure());
  }
}