import React, { FC } from 'react';
import useClubProfileHistory from './useClubProfileHistory';
import BookCard from '../../UI/BookCard/BookCard';
import './club-profile-history.scss';

interface ClubProfileHistoryProps {}

const ClubProfileHistory: FC<ClubProfileHistoryProps> = () => {
  const { chosenBooksHistory, isLoading, clubUrl } = useClubProfileHistory();
  //TODO поменять на инфинайт скролл
  return (
    <div className="club-profile-history">
      {!isLoading &&
        chosenBooksHistory.length !== 0 &&
        chosenBooksHistory.map((book, index) => (
          <BookCard
            key={`history-${clubUrl}-meeting-${index}`}
            isClubHistory
            bookData={{ meetingNumber: index + 1, ...book }}
          />
        ))}
      {!isLoading && chosenBooksHistory.length === 0 && (
        <div className="club-profile-history__placeholder">Собраний ещё не было</div>
      )}
    </div>
  );
};

export default ClubProfileHistory;
