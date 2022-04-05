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
    if(axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
      yield put(loadClubProfileInfoFailure());
    }
  }
}