import {
  addSystemNotification,
  deleteSystemNotification,
  setSystemNotification,
} from '../../reducers/system-notifications';
import { SystemNotification } from '../../../models/systemNotification';
import { put, delay } from 'redux-saga/effects';

export function* addSystemNotificationSaga(action: ReturnType<typeof addSystemNotification>) {
  const { message, notificationType } = action.payload;
  const delayTime = 2000;
  const notification: SystemNotification = { message, notificationType, id: Date.now() };
  yield put(setSystemNotification(notification));
  yield delay(delayTime);
  yield put(deleteSystemNotification(notification.id));
}