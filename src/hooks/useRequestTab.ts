import { useState } from 'react';
import { useActions } from './useActions';

export const useRequestTab = (callback: any) => {
  const [error, setError] = useState<any>(null)
  const { setIsLoadingTab } = useActions();

  const fetch = async (...args: any[]) => {
    setIsLoadingTab(true);
    try {
      await callback(...args);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoadingTab(false);
    }
  }

  return [fetch, error]
}