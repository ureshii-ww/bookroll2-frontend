import React, { FC } from 'react';

interface BookCardProps {
  isClubHistory: boolean,
  isOwner: boolean,
  bookData: {
    title: string,
    authors: string[],
    year: string,
    genres: string[],
    meetingNumber?: string,
  },
}

const BookCard: FC<BookCardProps> = (props) => {
  const {isClubHistory, isOwner, bookData, ...rest} = props;
  const {title, authors, year, genres, meetingNumber} = bookData;

  return (
    <div className="book-card">
      <div className={!isClubHistory ? "book-card__head" : "book-card__head book-card__head--with-meeting"}>
        <div className="book-card__title">
          <h4>{title}</h4>
        </div>
        <div className="book-card__authors">
          <p>{authors}</p>
        </div>
        {meetingNumber &&
        <div className="book-card__meeting-number">
          <p>Собрание {meetingNumber}</p>
        </div>}
      </div>
      <div className="book-card__footer">
        <div className="book-card__genres">
          <p>{genres}</p>
        </div>
        <div className="book-card__year">
          <p>{year}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;