import { useState } from 'react';
import { useActions } from './useActions';

export const useRequest = (callback: any) => {
  const [error, setError] = useState<any>(null);
  const {setIsLoading} = useActions();

  const fetch = async (...args: any[]) => {
    try {
      setIsLoading(true)
      await callback(...args);
    } catch (e:any) {
      setError(e)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetch, error]
}