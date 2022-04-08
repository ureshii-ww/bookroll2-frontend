import {
  loadUserSettingsAccount,
  loadUserSettingsAccountFailure,
  loadUserSettingsAccountSuccess,
  updatePassword,
  updatePasswordFailure,
  updatePasswordSuccess,
} from '../../../reducers/user-settings/account';
import UserService from '../../../../services/user.service';
import { call, put } from 'redux-saga/effects';
import { closeModal } from '../../../reducers/modal';
import axios from 'axios';
import { addSystemNotification } from '../../../reducers/system-notifications';
import { UpdatePasswordPayload } from '../../../reducers/user-settings/account/types';

export function* loadUserSettingsAccountSaga(action: ReturnType<typeof loadUserSettingsAccount>) {
  const userUrl = action.payload;
  try {
    const response: Awaited<ReturnType<typeof UserService.getAccountInfo>> = yield call(
      UserService.getAccountInfo,
      userUrl
    );
    yield put(loadUserSettingsAccountSuccess(response.data));
  } catch (error) {
    yield put(closeModal());
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
    }
    yield put(loadUserSettingsAccountFailure());
  }
}

export function* updatePasswordSaga(action: ReturnType<typeof updatePassword>) {
  const { userUrl, oldPassword, newPassword }: UpdatePasswordPayload = action.payload;
  try {
    const response: Awaited<ReturnType<typeof UserService.updatePassword>> = yield call(
      UserService.updatePassword,
      userUrl,
      oldPassword,
      newPassword
    );
    yield put(updatePasswordSuccess());
    yield put(addSystemNotification({ message: 'Пароль успешно обновлен', notificationType: 'success' }));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
    }
    yield put(updatePasswordFailure());
  }
}
