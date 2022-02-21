import React, { FC } from 'react';
import { WheelWinnerInfo } from '../../../models/wheel-winner-info';
import useWheelHistory from './useWheelHistory';
import TransparentButton from '../../UI/TransparentButton/TransparentButton';

interface WheelHistoryProps {
  rollsHistory: WheelWinnerInfo[];
}

const WheelHistory: FC<WheelHistoryProps> = ({ rollsHistory, ...rest }) => {
  const confirmBook = useWheelHistory(rollsHistory);

  return (
    <div>
      {rollsHistory.map((winner, index) => (
        <div>
          <div>{index + 1}. Книга от {winner.user.username}</div>
          <div>{winner.book.title} - {winner.book.authors.join(', ')}</div>
          <TransparentButton onClick={() => confirmBook(index)}>Подтвердить книгу</TransparentButton>
        </div>
      ))}
    </div>
  );
};

export default WheelHistory;