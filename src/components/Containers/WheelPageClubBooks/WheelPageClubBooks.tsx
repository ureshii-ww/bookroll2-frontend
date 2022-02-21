import React, { FC } from 'react';
import { ClubBooks } from '../../../models/club-books';
import ClubBooksCard from '../../UI/ClubBooksCard/ClubBooksCard';

interface WheelPageClubBooksProps {
  clubBooks: ClubBooks[],
  booksKey: string
}

const WheelPageClubBooks: FC<WheelPageClubBooksProps> = ({clubBooks, booksKey, ...rest}) => {
  return (
    <div className="club-profile-books">
      {clubBooks.map((data, index) => (
        <ClubBooksCard
          key={`wheel-${data.user.url}-books`}
          books={[...data.books]}
          user={data.user}
          booksKey={booksKey}
        />
      ))}
    </div>
  );
};

export default WheelPageClubBooks;