import { useState } from 'react';
import { useActions } from './useActions';
import { useNotification } from './useNotification';
import { AxiosError } from 'axios';

export const useRequestPage = (callback: any) => {
  const { setIsLoadingPage } = useActions();
  const addNotification = useNotification();

  return async (...args: any[]) => {
    try {
      setIsLoadingPage(true);
      await callback(...args);
    } catch (e: any) {
      await addNotification(
        JSON.parse(e.request?.response)?.message || JSON.parse(e.response?.response)?.message || 'Ошибка при запросе',
        'error'
      );
    } finally {
      setIsLoadingPage(false);
    }
  };
};
