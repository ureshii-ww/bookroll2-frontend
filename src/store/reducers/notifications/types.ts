import { Notification } from '../../../models/notification';

export interface NotificationsState {
  notifications: Notification[];
}

export enum NotificationsActionsEnum {
  SET_NOTIFICATIONS = 'SET_NOTIFICATIONS',
}

export interface SetNotifications {
  type: NotificationsActionsEnum.SET_NOTIFICATIONS;
  payload: Notification[];
}

export type NotificationsAction = SetNotifications;