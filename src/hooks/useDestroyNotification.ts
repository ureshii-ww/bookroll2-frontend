import { useActions } from './useActions';
import { store } from '../store';

export const useDestroyNotification = () => {
  const { setNotifications } = useActions();

  return (id: number) => {
    const notifications = [...store.getState().event.notifications];
    const index = notifications.findIndex(notification => notification.id === id);
    if (index !== -1) {
      notifications.splice(index, 1);
      setNotifications(notifications);
    }
  };
};
