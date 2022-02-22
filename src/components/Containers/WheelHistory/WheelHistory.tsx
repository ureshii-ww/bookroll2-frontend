import React, { FC } from 'react';
import { WheelWinnerInfo } from '../../../models/wheel-winner-info';
import useWheelHistory from './useWheelHistory';
import TransparentButton from '../../UI/TransparentButton/TransparentButton';
import './wheel-history.scss';

interface WheelHistoryProps {
  rollsHistory: WheelWinnerInfo[];
}

const WheelHistory: FC<WheelHistoryProps> = ({ rollsHistory, ...rest }) => {
  const confirmBook = useWheelHistory(rollsHistory);

  return (
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
  );
};

export default WheelHistory;
