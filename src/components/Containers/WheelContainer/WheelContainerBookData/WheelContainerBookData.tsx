import React, { FC } from 'react';
import { WheelWinnerInfo } from '../../../../models/wheel-winner-info';
import './wheel-container-book-data.scss';

interface WheelContainerBookInfoProps {
  winnerInfo: WheelWinnerInfo;
}

const WheelContainerBookData: FC<WheelContainerBookInfoProps> = ({ winnerInfo, ...rest }) => {
  return (
    <div className="wheel-container-book-data">
      <div className="wheel-container-book-data__user">
        <span>Книга от</span> {winnerInfo.user.username}
        <span className="wheel-container-book-data__emoji">{winnerInfo.user.emoji}</span>
      </div>
      <div className="wheel-container-book-data__title">{winnerInfo.book.title}</div>
      <div className="wheel-container-book-data__authors">{winnerInfo.book.authors.join(', ')}</div>
    </div>
  );
};

export default WheelContainerBookData;
