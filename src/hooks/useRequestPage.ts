import { useActions } from './useActions';

export const useRequestPage = (callback: (...args: any[]) => Promise<void>) => {
  const { setLoadingPageTrue, setLoadingPageFalse, addNotification } = useActions();

  return async (...args: any[]) => {
    try {
      setLoadingPageTrue();
      await callback(...args);
    } catch (e: any) {
      addNotification(
        JSON.parse(e.request?.response)?.message || JSON.parse(e.response?.response)?.message || 'Ошибка при запросе',
        'error'
      );
    } finally {
      setLoadingPageFalse();
    }
  };
};
