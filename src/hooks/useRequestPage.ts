import { useActions } from './useActions';

export const useRequestPage = (callback: (...args: any[]) => Promise<void>) => {
  const { setIsLoadingPage, addNotification } = useActions();

  return async (...args: any[]) => {
    try {
      setIsLoadingPage(true);
      await callback(...args);
    } catch (e: any) {
      addNotification(
        JSON.parse(e.request?.response)?.message || JSON.parse(e.response?.response)?.message || 'Ошибка при запросе',
        'error'
      );
    } finally {
      setIsLoadingPage(false);
    }
  };
};
