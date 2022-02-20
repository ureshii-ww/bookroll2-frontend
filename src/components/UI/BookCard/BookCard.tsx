import React, { FC } from 'react';
import TransparentButton from '../TransparentButton/TransparentButton';
import {ReactComponent as DeleteSvg} from '../../../assets/svg/delete.svg';
import './book-card.scss';

interface BookCardProps {
  isClubHistory?: boolean;
  isOwner?: boolean;
  handleDelete?: () => void;
  bookData: {
    title: string;
    authors: string[];
    year: string;
    genres: string[];
    meetingNumber?: number;
  };
}

const BookCard: FC<BookCardProps> = props => {
  const { isClubHistory, isOwner, bookData, handleDelete, ...rest } = props;
  const { title, authors, year, genres, meetingNumber } = bookData;

  return (
    <div className="book-card">
      <div className={!isClubHistory ? 'book-card__head' : 'book-card__head book-card__head--with-meeting'}>
        <div className="book-card__title">
          <h4>{title}</h4>
        </div>
        <div className="book-card__authors">
          <p>{authors.join(', ')}</p>
        </div>
        {meetingNumber && (
          <div className="book-card__meeting-number">
            <p>Собрание {meetingNumber}</p>
          </div>
        )}
        {isOwner && (
          <div className="book-card__delete">
            <TransparentButton onClick={handleDelete}>
              <DeleteSvg />
            </TransparentButton>
          </div>
        )}
      </div>
      <div className="book-card__footer">
        <div className="book-card__genres">
          <p>{genres.join(', ')}</p>
        </div>
        <div className="book-card__year">
          <p>{year}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;