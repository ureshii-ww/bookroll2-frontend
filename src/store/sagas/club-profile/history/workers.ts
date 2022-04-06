import {
  loadClubProfileHistory,
  loadClubProfileHistoryFailure,
  loadClubProfileHistorySuccess,
} from '../../../reducers/club-profile/history';
import { call, put } from 'redux-saga/effects';
import { finishLoadingTab, startLoadingTab } from '../../../reducers/loading-tab';
import ClubService from '../../../../services/club.service';
import axios from 'axios';
import { addSystemNotification } from '../../../reducers/system-notifications';

export function* loadClubProfileHistorySaga(action: ReturnType<typeof loadClubProfileHistory>) {
  const clubUrl: string = action.payload;
  yield put(startLoadingTab())
  try {
    const response: Awaited<ReturnType<typeof ClubService.getChosenBooksHistory>> = yield call(
      ClubService.getChosenBooksHistory,
      clubUrl
    );
    yield put(loadClubProfileHistorySuccess(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
      yield put(loadClubProfileHistoryFailure());
    }
    throw error;
  } finally {
    yield put(finishLoadingTab())
  }
}