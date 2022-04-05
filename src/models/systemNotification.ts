export type SystemNotificationType = 'success' | 'error';

export interface SystemNotification {
  message: string;
  notificationType: SystemNotificationType;
  id: number;
}