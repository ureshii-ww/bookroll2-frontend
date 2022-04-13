import {
  loadClubProfileInfo,
  loadClubProfileInfoFailure,
  loadClubProfileInfoSuccess,
} from '../../../reducers/club-profile/info';
import ClubService from '../../../../services/club.service';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { addSystemNotification } from '../../../reducers/system-notifications';

export function* loadClubProfileInfoSaga(action: ReturnType<typeof loadClubProfileInfo>) {
  const clubUrl: string = action.payload;
  try {
    const response: Awaited<ReturnType<typeof ClubService.getClubProfileInfo>> = yield call(
      ClubService.getClubProfileInfo,
      clubUrl
    );
    yield put(loadClubProfileInfoSuccess(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.request.status === 404) {
        yield put(
          loadClubProfileInfoFailure({
            status: error.request.status,
            message: 'Такой страницы не существует',
          })
        );
      } else {
        yield put(
          loadClubProfileInfoFailure({
            status: error.request.status,
            message: error.request.statusText,
          })
        );
        yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
      }
    }
  }
}