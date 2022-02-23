import React, { FC } from 'react';
import ClubBooksCard from '../../UI/ClubBooksCard/ClubBooksCard';
import './club-profile-books.scss';
import useClubProfileBooks from './useClubProfileBooks';

const ClubProfileBooks: FC = () => {
  const { booksData, clubUrl, isMaster, handleDelete, isLoaded } = useClubProfileBooks();
  return (
    <div className="club-profile-books">
      {isLoaded &&
        booksData.map((data, index) => (
          <ClubBooksCard
            key={`${clubUrl}-${data.user.url}-books`}
            books={[...data.books]}
            user={data.user}
            isMaster={isMaster}
            handleDelete={handleDelete}
          />
        ))}
      {isLoaded && booksData.length === 0 && <div>Участники ещё не выбрали книги</div>}
    </div>
  );
};

export default ClubProfileBooks;
