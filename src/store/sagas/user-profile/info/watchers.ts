import { takeEvery } from 'redux-saga/effects';
import { loadUserProfileInfo } from '../../../reducers/user-profile/info';
import { loadUserProfileInfoSaga } from './workers';

export function* watchLoadUserProfileInfo() {
  yield takeEvery(loadUserProfileInfo.type, loadUserProfileInfoSaga);
}