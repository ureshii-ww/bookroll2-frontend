import { useActions } from './useActions';

export const useRequestTab = <T = {}>(callback: (args?: T) => Promise<void>) => {
  const { setLoadingTabTrue, setLoadingTabFalse, addNotification } = useActions();

  return async (args?: T) => {
    try {
      setLoadingTabTrue();
      await callback(args);
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