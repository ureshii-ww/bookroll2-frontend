export type NotificationType = 'success' | 'error';

export interface Notification {
  message: string;
  notificationType: NotificationType;
  id: number;
}