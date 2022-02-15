import { useActions } from './useActions';

export const useRequestTab = (callback: (...args: any[]) => Promise<void>) => {
  const { setIsLoadingTab, addNotification } = useActions();

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