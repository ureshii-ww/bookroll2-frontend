import { useState } from 'react';
import { useActions } from './useActions';
import { useNotification } from './useNotification';

export const useRequestPage = (callback: any) => {
  const { setIsLoadingPage } = useActions();
  const addNotification = useNotification();

  return async (...args: any[]) => {
    try {
      setIsLoadingPage(true);
      await callback(...args);
    } catch (e: any) {
      await addNotification(e.data?.message || e.data || 'Ошибка при запросе', 'error');
    } finally {
      setIsLoadingPage(false);
    }
  };
};
