import {
  loadClubWheelBooks,
  loadClubWheelBooksFailure,
  loadClubWheelBooksSuccess,
} from '../../../reducers/club-wheel/books-list';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { addSystemNotification } from '../../../reducers/system-notifications';
import ClubService from '../../../../services/club.service';

export function* loadClubWheelBooksSaga(action: ReturnType<typeof loadClubWheelBooks>) {
  const clubUrl = action.payload;
  try {
    const response: Awaited<ReturnType<typeof ClubService.getClubBooks>> = yield call(
      ClubService.getClubBooks,
      clubUrl
    );
    yield put(loadClubWheelBooksSuccess(response.data));
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
    }
    yield put(loadClubWheelBooksFailure());
  }
}