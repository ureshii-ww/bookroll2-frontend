import { useEffect, useState } from 'react';
import { BookData } from '../../../models/book-data';
import { useRequestPage } from '../../../hooks/useRequestPage';
import BookService from '../../../services/book.service';

const useBookDataContainer = (bookId: string) => {
  const [bookData, setBookData] = useState<BookData>();
  const getBookData = useRequestPage(async () => {
    const response = await BookService.getBookData(bookId);
    setBookData(response.data);
  });

  useEffect(() => {
    getBookData();
  }, []);

  return bookData;
}

export default useBookDataContainer;