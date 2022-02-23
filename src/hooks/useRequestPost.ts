import { useActions } from './useActions';

export const useRequestPost = (callback: (...args: any[]) => Promise<void>) => {
  const { setLoadingPostTrue, setLoadingPostFalse, addNotification } = useActions();

  return async (...args: any[]) => {
    try {
      setLoadingPostTrue();
      await callback(...args);
    } catch (e: any) {
      addNotification(
        JSON.parse(e.request?.response)?.message || JSON.parse(e.response?.response)?.message || 'Ошибка при запросе',
        'error'
      );
    } finally {
      setLoadingPostFalse();
    }
  };
};