import React, { FC, useEffect, useState } from 'react';
import BookDataView from '../../UI/BookDataView/BookDataView';
import useBookDataContainer from './useBookDataContainer';

interface BookDataContainerProps {
  bookId: string;
}

const BookDataContainer: FC<BookDataContainerProps> = ({ bookId }) => {
  const bookData = useBookDataContainer(bookId);

  return bookData ? (
    <BookDataView book={bookData} />
  ) : (
    <div>Loading</div>
  );
};

export default BookDataContainer;