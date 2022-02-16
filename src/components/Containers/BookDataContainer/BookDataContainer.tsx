import React, { FC, useEffect, useState } from 'react';
import { BookData } from '../../../models/book-data';
import { useRequestPage } from '../../../hooks/useRequestPage';
import BookService from '../../../services/book.service';
import BookDataView from '../../UI/BookDataView/BookDataView';

interface BookDataContainerProps {
  bookId: string;
}

const BookDataContainer: FC<BookDataContainerProps> = ({ bookId }) => {
  const [bookData, setBookData] = useState<BookData>();
  const getBookData = useRequestPage(async () => {
    const response = await BookService.getBookData(bookId);
    setBookData(response.data);
  });

  useEffect(() => {
    getBookData();
  }, []);

  return bookData ? (
    <div>
      <BookDataView book={bookData} />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default BookDataContainer;