import { SystemNotification } from '../../../models/systemNotification';
import { NotificationType } from '../notifications/types';

export interface SystemNotificationsState {
  notifications: SystemNotification[];
}

export type SetSystemNotificationPayload = SystemNotification;
export type DeleteSystemNotificationPayload = number;
export type AddSystemNotificationPayload = {
  message: string;
  notificationType: NotificationType;
};