import React, { FC } from 'react';
import ClubBooksCard from '../../UI/ClubBooksCard/ClubBooksCard';
import './club-profile-books.scss';
import useClubProfileBooks from './useClubProfileBooks';

const ClubProfileBooks: FC = () => {
  const { booksData, clubUrl, isMaster, handleDelete, isLoading } = useClubProfileBooks();
  return isLoading ? (
    <div>Loading...</div>
  ) : (
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
      {booksData.length === 0 && <div>Участники ещё не выбрали книги</div>}
    </div>
  );
};

export default ClubProfileBooks;
