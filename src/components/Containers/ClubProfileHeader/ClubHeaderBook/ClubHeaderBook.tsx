import React, { FC, Fragment } from 'react';
import './club-header-book.scss';

interface ClubHeaderBookProps {
  book: {
    title: string;
    authors: string[];
  } | null;
}

const ClubHeaderBook: FC<ClubHeaderBookProps> = ({ book, ...rest }) => {
  return (
    <div className="club-header-book">
      <div className="club-header-book__title">Книга</div>
      {book ? (
        <div className="club-header-book__book">
          <div className="club-header-book__name">{book.title}</div>
          <div className="club-header-book__author">{book.authors.join(', ')}</div>
        </div>
      ) : (
        <div className="club-header-book__placeholder">Не выбрана</div>
      )}
    </div>
  );
};

export default ClubHeaderBook;