import { useEffect } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { confirmRandomBook, loadRandomBook } from '../../../store/reducers/random-book';

const useRandomBookContainer = () => {
  const dispatch = useAppDispatch();
  const {data: bookData, isLoading, isConfirming} = useAppSelector(state => state.randomBook);

  const confirmBook = () => {
    if (bookData) {
      dispatch(confirmRandomBook(bookData));
    }
  }

  const getBook = () => {
    dispatch(loadRandomBook());
  }

  useEffect(() => {
    getBook();
  }, []);

  return { bookData, confirmBook, getBook, isLoading, isConfirming };
};

export default useRandomBookContainer;
