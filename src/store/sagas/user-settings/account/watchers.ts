import { takeEvery } from 'redux-saga/effects';
import { loadUserSettingsAccount, updatePassword } from '../../../reducers/user-settings/account';
import { loadUserSettingsAccountSaga, updatePasswordSaga } from './workers';

export function* watchLoadUserSettingsAccount() {
  yield takeEvery(loadUserSettingsAccount.type, loadUserSettingsAccountSaga);
}

export function* watchUpdatePassword() {
  yield takeEvery(updatePassword.type, updatePasswordSaga);
}