import React, { FC } from 'react';

interface BookCardProps {
  isClubHistory: boolean,
  isOwner: boolean,
  meetingNumber?: string,
  title: string,
  authors: string[],
  year: string,
  genres: string[]
}

const BookCard: FC<BookCardProps> = (props) => {
  const {isClubHistory, isOwner, meetingNumber, ...bookData} = props;

  return (
    <div className="book-card">
      <div className={!isClubHistory ? "book-card__head" : "book-card__head book-card__head--with-meeting"}>
        <div className="book-card__title">
          <h4>{bookData.title}</h4>
        </div>
        <div className="book-card__authors">
        <p>{bookData.authors}</p>
      </div>
        {meetingNumber &&
        <div className="book-card__meeting-number">
          <p>Собрание {meetingNumber}</p>
        </div>}
      </div>
      <div className="book-card__footer">
        <div className="book-card__genres">
          <p>{bookData.genres}</p>
        </div>
        <div className="book-card__year">
          <p>{bookData.year}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;