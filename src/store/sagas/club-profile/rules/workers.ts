import {
  loadClubProfileRules,
  loadClubProfileRulesFailure,
  loadClubProfileRulesSuccess,
} from '../../../reducers/club-profile/rules';
import { call, put } from 'redux-saga/effects';
import { finishLoadingTab, startLoadingTab } from '../../../reducers/loading-tab';
import ClubService from '../../../../services/club.service';
import axios from 'axios';
import { addSystemNotification } from '../../../reducers/system-notifications';

export function* loadClubProfileRulesSaga(action: ReturnType<typeof loadClubProfileRules>) {
  const clubUrl: string = action.payload;
  yield put(startLoadingTab())
  try {
    const response: Awaited<ReturnType<typeof ClubService.getClubRules>> = yield call(
      ClubService.getClubRules,
      clubUrl
    );
    yield put(loadClubProfileRulesSuccess(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
      yield put(loadClubProfileRulesFailure());
    }
  } finally {
    yield put(finishLoadingTab())
  }
}