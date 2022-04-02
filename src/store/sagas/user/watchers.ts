import { takeEvery } from 'redux-saga/effects';
import { UserProfileActionsEnum } from '../../reducers/user-profile/types';
import { loadUserProfileInfoSaga } from './workers';

export function* watchLoadUserProfileInfo() {
  yield takeEvery(UserProfileActionsEnum.LOAD_USER_PROFILE_INFO, loadUserProfileInfoSaga)
}