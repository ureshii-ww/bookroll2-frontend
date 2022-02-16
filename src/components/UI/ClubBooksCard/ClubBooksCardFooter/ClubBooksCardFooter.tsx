import React, { FC } from 'react';
import TransparentButton from '../../TransparentButton/TransparentButton';
import { ReactComponent as DetailsSvg } from '../../../../assets/svg/details.svg';
import { ReactComponent as DeleteSvg } from '../../../../assets/svg/delete.svg';
import { BasicBookInfo } from '../../../../models/basic-book-info';
import { BasicUserInfo } from '../../../../models/basic-user-info';

interface ClubBooksCardFooterProps {
  books: BasicBookInfo[];
  user: BasicUserInfo;
  isMaster: boolean;
  showModal: (id: string) => void;
  handleDelete: (index: number, userUrl: string) => void;
}

const ClubBooksCardFooter: FC<ClubBooksCardFooterProps> = props => {
  const { books, user, isMaster, showModal, handleDelete } = props;

  return (
    <div className="club-books-card__footer">
      {books.map((book, index) => (
        <div className="club-books-card-book" key={`${user.url}-${book.id}`}>
          <div className="club-books-card-book__left-container">
            <p className="club-books-card-book__title">{`${book.title} - ${book.authors.join(', ')}`}</p>
            <TransparentButton className="club-books-card-book__details" onClick={() => showModal(book.id)}>
              <DetailsSvg />
            </TransparentButton>
          </div>
          <div className="club-books-card-book__right-container">
            <p className="club-books-card-book__year">{book.year}</p>
            {isMaster && (
              <TransparentButton className="club-books-card-book__delete" onClick={() => handleDelete(index, user.url)}>
                <DeleteSvg />
              </TransparentButton>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClubBooksCardFooter;