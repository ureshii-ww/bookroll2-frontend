import {useState} from "react";

export const useFetch = (callback: any) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<any>(null);

  const fetch = async (...args: any[]) => {
    try {
      await callback(...args);
      setIsLoaded(true);
    } catch (e:any) {
      setError(e)
    }
  }

  return [fetch, isLoaded, error]
}