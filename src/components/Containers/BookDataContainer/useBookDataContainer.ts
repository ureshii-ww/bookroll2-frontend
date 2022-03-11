import { useEffect, useState } from 'react';
import { BookData } from '../../../models/book-data';
import BookService from '../../../services/book.service';
import useRequest from '../../../hooks/useRequest';

const useBookDataContainer = (bookId: string) => {
  const [bookData, setBookData] = useState<BookData>();
  const getBookData = useRequest('Modal', async () => {
    const response = await BookService.getBookData(bookId);
    setBookData(response.data);
  });

  useEffect(() => {
    getBookData({});
  }, []);

  return bookData;
};

export default useBookDataContainer;