import { useActions } from './useActions';
import { useNotification } from './useNotification';

export const useRequestTab = (callback: any) => {
  const { setIsLoadingTab } = useActions();
  const addNotification = useNotification();

  return async (...args: any[]) => {
    setIsLoadingTab(true);
    try {
      await callback(...args);
    } catch (e: any) {
      await addNotification(
        JSON.parse(e.request?.response)?.message || JSON.parse(e.response?.response)?.message || 'Ошибка при запросе',
        'error'
      );
    } finally {
      setIsLoadingTab(false);
    }
  };
};