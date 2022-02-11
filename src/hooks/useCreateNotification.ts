import { useAppSelector } from './useAppSelector';
import { useActions } from './useActions';
import { Notification, NotificationType } from '../models/notification';

export const useCreateNotification = () => {
  const { setNotifications } = useActions();
  const notifications = [...useAppSelector(state => state.event.notifications)];

  return (message: string, notificationType: NotificationType) => {
    const id = Date.now();
    const newNotification: Notification = {
      id,
      message,
      notificationType,
    };
    notifications.push(newNotification);
    setNotifications(notifications);
    return id;
  };
};
