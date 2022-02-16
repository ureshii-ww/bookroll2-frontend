import React, { CSSProperties, FC, useState } from 'react';
import { BasicUserInfo } from '../../../models/basic-user-info';
import { BasicBookInfo } from '../../../models/basic-book-info';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../routes/route-names.enum';
import TransparentButton from '../TransparentButton/TransparentButton';
import { ReactComponent as DropdownSvg } from '../../../assets/svg/dropdown.svg';
import { ReactComponent as DeleteSvg } from '../../../assets/svg/delete.svg';
import './club-books-card.scss';

interface ClubBooksCardProps {
  user: BasicUserInfo;
  books: BasicBookInfo[];
  isMaster: boolean;
  handleDelete: (index: number, userUrl: string) => void;
}

const ClubBooksCard: FC<ClubBooksCardProps> = ({ user, books, isMaster, handleDelete, ...rest }) => {
  const avatarStyles: CSSProperties = {
    backgroundColor: user.color || 'FFF',
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(value => !value);
  };

  return (
    <div className={isOpen ? 'club-books-card club-books-card--open' : 'club-books-card'}>
      <div className="club-books-card__head">
        <Link className="club-books-card__user" to={`${RouteNames.USER_PROFILE_BASE}${user.url}`}>
          <div className="club-books-card__avatar" style={avatarStyles}>
            <span>{user.emoji}</span>
          </div>
          <span className="club-books-card__username">{user.username}</span>
        </Link>
        <TransparentButton className="club-books-card__button" onClick={toggleOpen}>
          <DropdownSvg />
        </TransparentButton>
      </div>
      <div className="club-books-card__footer">
        {books.map((book, index) => (
          <div className="club-books-card-book" key={`${user.url}-${book.id}`}>
            <p className="club-books-card-book__title">{`${book.title} - ${book.authors.join(', ')}`}</p>
            <div className="club-books-card-book__right-container">
              <p className="club-books-card-book__year">{book.year}</p>
              {isMaster && (
                <TransparentButton
                  className="club-books-card-book__button"
                  onClick={() => handleDelete(index, user.url)}>
                  <DeleteSvg />
                </TransparentButton>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubBooksCard;
