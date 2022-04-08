import {
  loadRandomBookFailure,
  loadRandomBookSuccess,
  confirmRandomBook,
  confirmRandomBookFailure,
  confirmRandomBookSuccess,
  loadRandomBook,
} from '../../reducers/random-book';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { addSystemNotification } from '../../reducers/system-notifications';
import BookService from '../../../services/book.service';

export function* loadRandomBookSaga() {
  try {
    const response: Awaited<ReturnType<typeof BookService.getRandomBook>> = yield call(BookService.getRandomBook);
    const bookData = response.data;
    yield put(loadRandomBookSuccess(bookData));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
    }
    yield put(loadRandomBookFailure());
  }
}

export function* confirmRandomBookSaga(action: ReturnType<typeof confirmRandomBook>) {
  const bookData = action.payload;
  try {
    yield call(BookService.confirmBook, bookData);
    yield put(confirmRandomBookSuccess());
    yield put(addSystemNotification({ message: 'Книга добавлена', notificationType: 'success' }));
    yield put(loadRandomBook());
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
    }
    yield put(confirmRandomBookFailure());
  }
}