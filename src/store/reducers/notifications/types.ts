export type NotificationType = 'success' | 'error';

export interface Notification {
  message: string;
  notificationType: NotificationType;
  id: number;
}

export interface NotificationsState {
  notifications: Notification[];
}

export enum NotificationsActionsEnum {
  SET_NOTIFICATION = 'SET_NOTIFICATION',
  DELETE_NOTIFICATION = 'DELETE_NOTIFICATION'
}

export interface SetNotification {
  type: NotificationsActionsEnum.SET_NOTIFICATION;
  payload: Notification;
}

export interface DeleteNotification {
  type: NotificationsActionsEnum.DELETE_NOTIFICATION;
  payload: number;
}

export type NotificationsAction = SetNotification | DeleteNotification;