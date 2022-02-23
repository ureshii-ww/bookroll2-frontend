import { useEffect, useState } from 'react';
import { BookData } from '../../../models/book-data';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useRequestPage } from '../../../hooks/useRequestPage';
import BookService from '../../../services/book.service';
import { useActions } from '../../../hooks/useActions';
import { useRequestPost } from '../../../hooks/useRequestPost';

const useRandomBookContainer = () => {
  const [bookData, setBookData] = useState<BookData>({
    title: '',
    authors: [''],
    year: '',
    cover: '',
    description: '',
    genres: [''],
  });
  const isLoading = useAppSelector(state => state.loadingPage.isLoadingPage);
  const [isLoaded, setIsLoaded] = useState(false);

  const getBook = useRequestPage(async () => {
    const response = await BookService.getRandomBook();
    setBookData(response.data);
    setIsLoaded(true);
  });

  const { addNotification } = useActions();
  const confirmBook = useRequestPost(async (bookData: BookData) => {
    await BookService.confirmBook(bookData);
    addNotification('Книга добавлена', 'success');
    const response = await BookService.getRandomBook();
    setBookData(response.data);
  });

  useEffect(() => {
    getBook();
  }, []);

  return { bookData, confirmBook, getBook, isLoading, isLoaded };
};

export default useRandomBookContainer;