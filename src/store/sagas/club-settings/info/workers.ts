import {
  loadClubSettingsInfo,
  loadClubSettingsInfoFailure,
  loadClubSettingsInfoSuccess,
  updateClubSettingsInfo,
  updateClubSettingsInfoFailure,
  updateClubSettingsInfoSuccess,
} from '../../../reducers/club-settings/info';
import ClubService from '../../../../services/club.service';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { addSystemNotification } from '../../../reducers/system-notifications';
import { closeModal } from '../../../reducers/modal';
import { UpdateClubSettingsInfoPayload } from '../../../reducers/club-settings/info/types';

export function* loadClubSettingsInfoSaga(action: ReturnType<typeof loadClubSettingsInfo>) {
  const clubUrl: string = action.payload;
  try {
    const response: Awaited<ReturnType<typeof ClubService.getSettingsInfo>> = yield call(
      ClubService.getSettingsInfo,
      clubUrl
    );
    yield put(loadClubSettingsInfoSuccess(response.data));
  } catch (error) {
    yield put(closeModal());
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
    }
    yield put(loadClubSettingsInfoFailure());
  }
}

export function* updateClubSettingsInfoSaga(action: ReturnType<typeof updateClubSettingsInfo>) {
  const { clubUrl, masterUrl, clubname, description }: UpdateClubSettingsInfoPayload = action.payload;
  try {
    yield call(ClubService.updateSettings, clubUrl, clubname, masterUrl, description);
    yield put(updateClubSettingsInfoSuccess());
    yield put(addSystemNotification({ message: 'Настройки успешно обновлены', notificationType: 'success' }));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
    }
    yield put(updateClubSettingsInfoFailure());
  }
}
