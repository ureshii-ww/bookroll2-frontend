import { fork } from 'redux-saga/effects';
import { clubProfileInfoSaga } from './info';
import { clubProfileBooksSaga } from './books';
import { clubProfileMembersSaga } from './members';
import { clubProfileRulesSaga } from './rules';
import { clubProfileHistorySaga } from './history';

export function* clubProfileSaga() {
  yield fork(clubProfileInfoSaga);
  yield fork(clubProfileBooksSaga);
  yield fork(clubProfileMembersSaga);
  yield fork(clubProfileRulesSaga);
  yield fork(clubProfileHistorySaga);
}