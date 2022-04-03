import { useCallback, useEffect, useState } from 'react';

export function useInfiniteScroll(callback: () => void) {
  const [triggerElement, setTriggerElement] = useState<Element | null>(null);

  const triggerRef = useCallback((element: Element | null) => {
    setTriggerElement(element);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const container = entries[0];
        if (container.isIntersecting) {
          callback();
        }
      },
      { threshold: 0.5 }
    );

    if (triggerElement) {
      observer.observe(triggerElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [triggerElement, callback]);

  return {
    triggerRef,
  };
}
