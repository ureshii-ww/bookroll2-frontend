import { useCallback, useEffect, useState } from 'react';

export const useInfiniteScroll = () => {
  const [lastElement, setLastElement] = useState<Element | null>(null);
  const [pageNum, setPageNum] = useState<number>(1);

  const containerRef = useCallback(node => {
    setLastElement(node);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async entries => {
        const container = entries[0];
        if (container.isIntersecting) {
          setPageNum(num => num + 1);
        }
      },
      { threshold: 0.3 }
    );

    if (lastElement) {
      observer.observe(lastElement);
    }

    return () => {
      if (lastElement) {
        observer.unobserve(lastElement);
      }
    };
  }, [lastElement]);

  return {
    pageNum,
    setPageNum,
    containerRef
  };
};
