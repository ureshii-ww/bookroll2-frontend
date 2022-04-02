import { call, put } from 'redux-saga/effects';
import { LoadUserProfileInfo } from '../../reducers/user-profile/types';
import UserService from '../../../services/user.service';
import { loadUserProfileInfoSuccess } from '../../reducers/user-profile/actions';

export function* loadUserProfileInfoSaga(action: LoadUserProfileInfo) {
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

