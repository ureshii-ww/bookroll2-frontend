import { useActions } from './useActions';

export const useRequestTab = (callback: (...args: any[]) => Promise<void>) => {
  const { setLoadingTabTrue, setLoadingTabFalse, addNotification } = useActions();

  return async (...args: any[]) => {
    setLoadingTabTrue();
    try {
      await callback(...args);
    } catch (e: any) {
      addNotification(
        JSON.parse(e.request?.response)?.message || JSON.parse(e.response?.response)?.message || 'Ошибка при запросе',
        'error'
      );
    } finally {
      setLoadingTabFalse();
    }
  };
};