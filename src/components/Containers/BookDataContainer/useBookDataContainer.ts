import { useEffect } from 'react';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { loadBookData } from '../../../store/reducers/book-data';

const useBookDataContainer = (bookId: string) => {
  const dispatch = useAppDispatch();
  const { data: bookData, isLoading } = useAppSelector(state => state.bookData);

  useEffect(() => {
    dispatch(loadBookData(bookId));
  }, []);

  return { bookData, isLoading };
};

export default useBookDataContainer;
