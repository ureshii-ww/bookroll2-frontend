import { useCreateNotification } from './useCreateNotification';
import { useDestroyNotification } from './useDestroyNotification';
import { NotificationType } from '../models/notification';

export const useNotification = () => {
  const createNotification = useCreateNotification();
  const destroyNotification = useDestroyNotification();

  return async (message: string, notificationType: NotificationType) => {
    const id = createNotification(message, notificationType);
    setTimeout(() => {
      destroyNotification(id);
    }, 3000);
  };
};
