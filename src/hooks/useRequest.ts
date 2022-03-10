import { useActions } from './useActions';
import { RequestTypes } from '../models/request-types';
import useLoadingMethods from './useLoadingMethods';

function useRequest <T = {}>(type: RequestTypes, callback: (args: T) => void) {
  const { addNotification } = useActions();
  const loading = useLoadingMethods(type);

  return async (args: T) => {
    try {
      loading.methodTrue();
      await callback(args);
    } catch (e: any) {
      addNotification(
        JSON.parse(e.request?.response)?.message || JSON.parse(e.response?.response)?.message || 'Ошибка при запросе',
        'error'
      );
    } finally {
      loading.methodFalse();
    }
  };
};

export default useRequest;
