import {
  deleteUserProfileBook, deleteUserProfileBookSuccess,
  loadUserProfileBooks,
  loadUserProfileBooksSuccess,
  resetUserProfileBooks,
} from '../../../reducers/user-profile/books';
import { call, put, select } from 'redux-saga/effects';
import { LoadingTabActionCreators } from '../../../reducers/loading-tab/action-creators';
import UserService from '../../../../services/user.service';
import axios from 'axios';
import { NotificationsActionCreators } from '../../../reducers/notifications/action-creators';
import { RootState } from '../../../index';
import { UserProfileBooksState } from '../../../reducers/user-profile/books/types';

export function* loadUserProfileBooksSaga(action: ReturnType<typeof loadUserProfileBooks>) {
  const { page, userUrl, size } = action.payload;
  yield put(LoadingTabActionCreators.setLoadingTabTrue());
  try {
    const response: Awaited<ReturnType<typeof UserService.getUserBooks>> = yield call(
      UserService.getUserBooks,
      userUrl,
      page,
      size
    );
    const length = parseInt(response.headers['x-data-length']);
    yield put(loadUserProfileBooksSuccess({ data: response.data, length }));
  } catch (error: any) {
    if (axios.isAxiosError(error))
      yield call(NotificationsActionCreators.addNotification, error.request.statusText, 'error');
  } finally {
    yield put(LoadingTabActionCreators.setLoadingTabFalse());
  }
}

export function* resetUserProfileBooksSaga(action: ReturnType<typeof resetUserProfileBooks>) {
  const userUrl = action.payload;
  yield put(loadUserProfileBooks({ userUrl, page: 1, size: 10 }));
}

export function* deleteUserProfileBookSaga(action: ReturnType<typeof deleteUserProfileBook>) {
  const { index, userUrl } = action.payload;
  try {
    const response: Awaited<ReturnType<typeof UserService.deleteBook>> = yield call(
      UserService.deleteBook,
      userUrl,
      index
    );
    yield put(deleteUserProfileBookSuccess(index));
    const { page, isOut, size }: UserProfileBooksState = yield select((state: RootState) => state.userProfile.books);
    if (!isOut) {
      const response: Awaited<ReturnType<typeof UserService.getUserBooks>> = yield call(
        UserService.getUserBooks,
        userUrl,
        page,
        size
      );
      const lastArrayElement = response.data[response.data.length - 1];
      const newLength = parseInt(response.headers['x-data-length']);
      yield put(loadUserProfileBooksSuccess({ data: [lastArrayElement], length: newLength }));
    }
  } catch (error) {
    if (axios.isAxiosError(error))
      yield call(NotificationsActionCreators.addNotification, error.request.statusText, 'error');
  }
}
