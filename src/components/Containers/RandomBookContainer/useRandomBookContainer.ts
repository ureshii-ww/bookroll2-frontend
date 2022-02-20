import { useEffect, useState } from 'react';
import { BookData } from '../../../models/book-data';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useRequestPage } from '../../../hooks/useRequestPage';
import BookService from '../../../services/book.service';
import { useActions } from '../../../hooks/useActions';

const useRandomBookContainer = () => {
  const [bookData, setBookData] = useState<BookData>({
    title: '',
    authors: [''],
    year: '',
    cover: '',
    description: '',
    genres: [''],
  });
  const isLoading = useAppSelector(state => state.event.isLoadingPage);

  const getBook = useRequestPage(async () => {
    const response = await BookService.getRandomBook();
    setBookData(response.data);
  });

  const { addNotification } = useActions();
  const confirmBook = useRequestPage(async (bookData: BookData) => {
    await BookService.confirmBook(bookData);
    addNotification('Книга добавлена', 'success');
    const response = await BookService.getRandomBook();
    setBookData(response.data);
  });

  useEffect(() => {
    getBook();
  }, []);

  return { bookData, confirmBook, getBook, isLoading };
};

export default useRandomBookContainer;