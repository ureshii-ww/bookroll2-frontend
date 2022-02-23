import { useEffect, useState } from 'react';
import { BookData } from '../../../models/book-data';
import BookService from '../../../services/book.service';
import { useRequestModal } from '../../../hooks/useRequestModal';

const useBookDataContainer = (bookId: string) => {
  const [bookData, setBookData] = useState<BookData>();
  const getBookData = useRequestModal(async () => {
    const response = await BookService.getBookData(bookId);
    setBookData(response.data);
  });

  useEffect(() => {
    getBookData();
  }, []);

  return bookData;
}

export default useBookDataContainer;