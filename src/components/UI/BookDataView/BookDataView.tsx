import React, { FC, useEffect, useState } from 'react';
import { BookData } from '../../../models/book-data';
import './book-data-view.scss';

interface BookDataViewProps {
  book: BookData;
}

const BookDataView: FC<BookDataViewProps> = ({ book, ...rest }) => {
  //fix parser bug
  const [coverSrc, setCoverSrc] = useState(book.cover)

  useEffect(() => {
    const readlyHref = 'https://readly.ru'
    if (!coverSrc.includes(readlyHref)) {
      setCoverSrc(readlyHref + book.cover);
    }
  },[])

  return (
    <div className="book-data-view">
      <div className="book-data-view__header">
        <img className="book-data-view__cover" src={coverSrc} alt={book.title} />
        <div className="book-data-view__title-container">
          <h1 className="book-data-view__title">{book.title}</h1>
        </div>
      </div>
      <div className="book-data-view__info">
        <div className="book-data-view__info-line">
          <p className="book-data-view__info-label">{book.authors.length <= 1 ? 'Автор:' : 'Авторы'}</p>
          <p className="book-data-view__info-value">{book.authors.join(', ')}</p>
        </div>
        <div className="book-data-view__info-line">
          <p className="book-data-view__info-label">{book.genres.length <= 1 ? 'Жанр:' : 'Жанры:'}</p>
          <p className="book-data-view__info-value">{book.genres.join(', ')}</p>
        </div>
        <div className="book-data-view__info-line">
          <p className="book-data-view__info-label">Год:</p>
          <p className="book-data-view__info-value">{book.year}</p>
        </div>
      </div>
      <div className="book-data-view__description-container">
        <p className="book-data-view__info-label">Описание:</p>
        <span className="book-data-view__description">{book.description}</span>
      </div>
    </div>
  );
};

export default BookDataView;