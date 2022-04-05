import { takeEvery } from 'redux-saga/effects';
import { addSystemNotification } from '../../reducers/system-notifications';
import { addSystemNotificationSaga } from './workers';

export function* watchAddSystemNotification() {
  yield takeEvery(addSystemNotification.type, addSystemNotificationSaga)
}