import React, { FC, Fragment } from 'react';
import ClubBooksCard from '../../UI/ClubBooksCard/ClubBooksCard';
import './club-profile-books.scss';
import useClubProfileBooks from './useClubProfileBooks';
import { ReactComponent as CryingFace } from '../../../assets/svg/loudly-crying-face.svg';

const ClubProfileBooks: FC = () => {
  const { booksData, clubUrl, isMaster, handleDelete, isLoading } = useClubProfileBooks();
  return (
    <Fragment>
      {!isLoading && (
        <div className="club-profile-books">
          {booksData.map(data => (
            <ClubBooksCard
              key={`${clubUrl}-${data.user.url}-books`}
              books={[...data.books]}
              user={data.user}
              isMaster={isMaster}
              handleDelete={handleDelete}
            />
          ))}
          {booksData.length === 0 && (
            <div className="club-profile-books__placeholder">
              <span>
                <CryingFace />
              </span>
              <span>Участники ещё не выбрали книги</span>
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default ClubProfileBooks;
