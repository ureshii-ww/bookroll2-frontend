import { useEffect, useState } from 'react';
import { BookData } from '../../../models/book-data';
import { useAppSelector } from '../../../hooks/useAppSelector';
import BookService from '../../../services/book.service';
import { useActions } from '../../../hooks/useActions';
import useRequest from '../../../hooks/useRequest';

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

  const getBook = useRequest('Page', async () => {
    const response = await BookService.getRandomBook();
    setBookData(response.data);
    setIsLoaded(true);
  });

  const { addNotification } = useActions();
  const confirmBook = useRequest('Post', async (bookData: BookData) => {
    await BookService.confirmBook(bookData);
    addNotification('Книга добавлена', 'success');
    getBook({});
  });

  useEffect(() => {
    getBook({});
  }, []);

  return { bookData, confirmBook, getBook, isLoading, isLoaded };
};

export default useRandomBookContainer;
