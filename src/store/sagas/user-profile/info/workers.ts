import {
  loadUserProfileInfo,
  loadUserProfileInfoFailure,
  loadUserProfileInfoSuccess,
} from '../../../reducers/user-profile/info';
import UserService from '../../../../services/user.service';
import { call, put } from 'redux-saga/effects';
import { addSystemNotification } from '../../../reducers/system-notifications';
import axios from 'axios';

export function* loadUserProfileInfoSaga(action: ReturnType<typeof loadUserProfileInfo>) {
  const userUrl = action.payload;
  try {
    const response: Awaited<ReturnType<typeof UserService.getUserProfileInfo>> = yield call(
      UserService.getUserProfileInfo,
      userUrl
    );
    yield put(loadUserProfileInfoSuccess(response.data));
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
      yield put(loadUserProfileInfoFailure());
    }
  }
}