import {
  loadUserSettingsInfo,
  loadUserSettingsInfoFailure,
  loadUserSettingsInfoSuccess,
  updateUserSettingsInfo,
  updateUserSettingsInfoFailure,
  updateUserSettingsInfoSuccess,
} from '../../../reducers/user-settings/info';
import UserService from '../../../../services/user.service';
import { call, put } from 'redux-saga/effects';
import { closeModal } from '../../../reducers/modal';
import axios from 'axios';
import { addSystemNotification } from '../../../reducers/system-notifications';
import { UpdateUserSettingsInfoPayload } from '../../../reducers/user-settings/info/types';

export function* loadUserSettingsInfoSaga(action: ReturnType<typeof loadUserSettingsInfo>) {
  const userUrl: string = action.payload;
  try {
    const response: Awaited<ReturnType<typeof UserService.getUserProfileInfo>> = yield call(
      UserService.getUserProfileInfo,
      userUrl
    );
    const { username, color, emoji } = response.data;
    yield put(loadUserSettingsInfoSuccess({ username, color, emoji }));
  } catch (error) {
    yield put(closeModal());
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
    }
    yield put(loadUserSettingsInfoFailure());
  }
}

export function* updateUserSettingsInfoSaga(action: ReturnType<typeof updateUserSettingsInfo>) {
  const { userUrl, username, color, emoji }: UpdateUserSettingsInfoPayload = action.payload;
  try {
    yield call(UserService.updateInfo, userUrl, username, color, emoji);
    yield put(updateUserSettingsInfoSuccess());
    yield put(addSystemNotification({ message: 'Настройки успешно обновлены', notificationType: 'success' }));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
    }
    yield put(updateUserSettingsInfoFailure());
  }
}
