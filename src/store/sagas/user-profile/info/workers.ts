import { loadUserProfileInfo, loadUserProfileInfoSuccess } from '../../../reducers/user-profile/info';
import UserService from '../../../../services/user.service';
import { call, put } from 'redux-saga/effects';

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