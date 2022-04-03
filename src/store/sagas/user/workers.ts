import { call, put } from 'redux-saga/effects';
import UserService from '../../../services/user.service';
import { loadUserProfileInfo, loadUserProfileInfoSuccess } from '../../reducers/user-profile/info';

export function* loadUserProfileInfoSaga(action: ReturnType<typeof loadUserProfileInfo>) {
  const userUrl = action.payload;
  try {
    const response: Awaited<ReturnType<typeof UserService.getUserProfileInfo>> = yield call(
      UserService.getUserProfileInfo,
      userUrl
    );
    yield put(loadUserProfileInfoSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

