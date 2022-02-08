import React, { FC } from 'react';
import { BasicUserInfo } from '../../../models/basic-user-info';
import { BasicBookInfo } from '../../../models/basic-book-info';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../routes/route-names.enum';

interface ClubBooksCardProps {
  user: BasicUserInfo,
  books: BasicBookInfo[]
}

const ClubBooksCard: FC<ClubBooksCardProps> = ({ user, books, ...rest }) => {
  return (
    <div>
      <div>
        <div>{user.emoji}</div>
        <Link to={`${RouteNames.USER_PROFILE_BASE}${user.url}`}>{user.username}</Link>
        <div>button</div>
      </div>
      <div>
        {books.map(book =>
          <div key={`${user.url}-${book.id}`}>
            <p>{book.title}</p>
            <span>{'\u00A0'}-{'\u00A0'}</span>
            <p>{book.authors.join(', ')}</p>
            <p>{book.year}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClubBooksCard;