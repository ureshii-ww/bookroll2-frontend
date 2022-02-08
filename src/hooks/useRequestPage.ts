import { useState } from 'react';
import { useActions } from './useActions';

export const useRequestPage = (callback: any) => {
  const [error, setError] = useState<any>(null);
  const { setIsLoadingPage } = useActions();

  const fetch = async (...args: any[]) => {
    try {
      setIsLoadingPage(true)
      await callback(...args);
    } catch (e: any) {
      setError(e)
    } finally {
      setIsLoadingPage(false)
    }
  }

  return [fetch, error]
}