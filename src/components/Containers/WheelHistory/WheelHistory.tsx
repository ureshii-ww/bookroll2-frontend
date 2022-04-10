import React, { FC } from 'react';
import useWheelHistory from './useWheelHistory';
import TransparentButton from '../../UI/TransparentButton/TransparentButton';
import './wheel-history.scss';

export interface WheelHistoryProps {
  clubUrl: string;
}

const WheelHistory: FC<WheelHistoryProps> = ({clubUrl}) => {
  const { rollsHistory, confirmBook } = useWheelHistory(clubUrl);

  return rollsHistory.length > 0 ? (
    <div className="wheel-history">
      {rollsHistory.map((winner, index) => (
        <div className="wheel-history__group">
          <div className="wheel-history__user">
            {index + 1}. Книга от <span className="wheel-history__username">{winner.user.username}</span>{' '}
            <span className="wheel-history__emoji">{winner.user.emoji}</span>
          </div>
          <div className="wheel-history__book">
            <span className="wheel-history__title">{winner.book.title}</span> - {winner.book.authors.join(', ')}
          </div>
          <div className="wheel-history__button">
            <TransparentButton onClick={() => confirmBook(index)}>Подтвердить книгу</TransparentButton>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="wheel-history__placeholder">Вы ещё не крутили колесо</div>
  );
};

export default WheelHistory;
