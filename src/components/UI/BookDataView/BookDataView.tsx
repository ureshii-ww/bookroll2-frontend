import React, { FC } from 'react';
import { BookData } from '../../../models/book-data';

interface BookDataViewProps {
  book: BookData;
}

const BookDataView: FC<BookDataViewProps> = ({book, ...rest}) => {
  return (
    <div>
      <img src={book.cover} alt={book.title} />
      <h1>{book.title}</h1>
      <p>{book.authors.join(', ')}</p>
      <p>{book.genres.join(', ')}</p>
      <p>{book.year}</p>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDataView;