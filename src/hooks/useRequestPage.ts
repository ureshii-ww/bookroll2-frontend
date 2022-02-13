import { useActions } from './useActions';
import { useNotification } from './useNotification';

export const useRequestPage = (callback: (...args: any[]) => Promise<void>) => {
  const { setIsLoadingPage } = useActions();
  const addNotification = useNotification();

  return async (...args: any[]) => {
    try {
      setIsLoadingPage(true);
      await callback(...args);
    } catch (e: any) {
      await addNotification(
        JSON.parse(e.request?.response)?.message || JSON.parse(e.response?.response)?.message || 'Ошибка при запросе',
        'error'
      );
    } finally {
      setIsLoadingPage(false);
    }
  };
};
