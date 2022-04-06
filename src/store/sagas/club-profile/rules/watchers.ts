import { takeEvery } from 'redux-saga/effects';
import { loadClubProfileRules } from '../../../reducers/club-profile/rules';
import { loadClubProfileRulesSaga } from './workers';

export function* watchLoadClubProfileRules() {
  yield takeEvery(loadClubProfileRules.type, loadClubProfileRulesSaga);
}