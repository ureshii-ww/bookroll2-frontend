import React, { FC } from 'react';
import BookDataView from '../../UI/BookDataView/BookDataView';
import useBookDataContainer from './useBookDataContainer';
import PageLoader from '../../UI/PageLoader/PageLoader';
import './book-data-container.scss';

interface BookDataContainerProps {
  bookId: string;
}

const BookDataContainer: FC<BookDataContainerProps> = ({ bookId }) => {
  const { bookData, isLoading } = useBookDataContainer(bookId);

  return !isLoading && bookData ? (
    <BookDataView book={bookData} />
  ) : (
    <div className="book-data-container__loader">
      <PageLoader />
    </div>
  );
};

export default BookDataContainer;