import { useActions } from './useActions';

export const useRequestModal = (callback: (...args: any[]) => Promise<void>) => {
  const { setLoadingModalTrue, setLoadingModalFalse, addNotification } = useActions();

  return async (...args: any[]) => {
    try {
      setLoadingModalTrue();
      await callback(...args);
    } catch (e: any) {
      addNotification(
        JSON.parse(e.request?.response)?.message || JSON.parse(e.response?.response)?.message || 'Ошибка при запросе',
        'error'
      );
    } finally {
      setLoadingModalFalse();
    }
  };
};