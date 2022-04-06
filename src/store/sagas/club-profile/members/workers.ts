import {
  loadClubProfileMembers,
  loadClubProfileMembersFailure,
  loadClubProfileMembersSuccess,
} from '../../../reducers/club-profile/members';
import { call, put } from 'redux-saga/effects';
import { finishLoadingTab, startLoadingTab } from '../../../reducers/loading-tab';
import ClubService from '../../../../services/club.service';
import axios from 'axios';
import { addSystemNotification } from '../../../reducers/system-notifications';

export function* loadClubProfileMembersSaga(action: ReturnType<typeof loadClubProfileMembers>) {
  const clubUrl: string = action.payload;
  yield put(startLoadingTab())
  try {
    const response: Awaited<ReturnType<typeof ClubService.getClubMembers>> = yield call(
      ClubService.getClubMembers,
      clubUrl
    );
    yield put(loadClubProfileMembersSuccess(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
      yield put(loadClubProfileMembersFailure());
    }
  } finally {
    yield put(finishLoadingTab())
  }
}