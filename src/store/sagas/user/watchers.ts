import { takeEvery } from 'redux-saga/effects';
import { loadUserProfileInfoSaga } from './workers';
import { loadUserProfileInfo } from '../../reducers/user-profile/info';

export function* watchLoadUserProfileInfo() {
  yield takeEvery(loadUserProfileInfo.type, loadUserProfileInfoSaga)
}