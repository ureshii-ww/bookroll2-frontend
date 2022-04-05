import ClubService from '../../../../services/club.service';
import {
  deleteClubProfileBook,
  deleteClubProfileBookSuccess,
  loadClubProfileBooks,
  loadClubProfileBooksFailure,
  loadClubProfileBooksSuccess,
} from '../../../reducers/club-profile/books';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { addSystemNotification } from '../../../reducers/system-notifications';
import { DeleteClubProfileBookPayload } from '../../../reducers/club-profile/books/types';

export function* loadClubProfileBooksSaga(action: ReturnType<typeof loadClubProfileBooks>) {
  const clubUrl: string = action.payload;
  try {
    const response: Awaited<ReturnType<typeof ClubService.getClubBooks>> = yield call(
      ClubService.getClubBooks,
      clubUrl
    );
    yield put(loadClubProfileBooksSuccess(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
      yield put(loadClubProfileBooksFailure());
    }
  }
}

export function* deleteClubProfileBookSaga(action: ReturnType<typeof deleteClubProfileBook>) {
  const { clubUrl, userUrl, index }: DeleteClubProfileBookPayload = action.payload;
  try {
    yield call(ClubService.deleteClubBook, clubUrl, userUrl, index);
    yield put(deleteClubProfileBookSuccess({ userUrl, index }));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
      yield put(loadClubProfileBooksFailure());
    }
  }
}
