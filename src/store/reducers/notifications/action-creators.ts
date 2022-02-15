import { DeleteNotification, Notification, NotificationsActionsEnum, NotificationType, SetNotification } from './types';
import notification from '../../../components/UI/Notification/Notification';
import { AppDispatch } from '../../index';

export const NotificationsActionCreators = {
  setNotification: (notification: Notification): SetNotification => ({
    type: NotificationsActionsEnum.SET_NOTIFICATION,
    payload: notification,
  }),
  deleteNotification: (deleteTime: number): DeleteNotification => ({
    type: NotificationsActionsEnum.DELETE_NOTIFICATION,
    payload: deleteTime
  }),
  addNotification: (message: string, notificationType: NotificationType) => (dispatch: AppDispatch) => {
    const deleteTime = 2000;
    const notification: Notification = {message, notificationType, id: Date.now()}
    dispatch(NotificationsActionCreators.setNotification(notification));
    setTimeout(() => {
      dispatch(NotificationsActionCreators.deleteNotification(notification.id))
    }, deleteTime)
  }
};
