import { Notification } from '../../../models/notification';
import { NotificationsActionsEnum, SetNotifications } from './types';

export const NotificationsActionCreators = {
  setNotifications: (notifications: Notification[]): SetNotifications => ({
    type: NotificationsActionsEnum.SET_NOTIFICATIONS,
    payload: notifications,
  }),
};
