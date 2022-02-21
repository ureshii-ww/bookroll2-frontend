import React, { FC } from 'react';
import { WheelWinnerInfo } from '../../../../models/wheel-winner-info';

interface WheelContainerBookInfoProps {
  winnerInfo: WheelWinnerInfo;
}

const WheelContainerBookData: FC<WheelContainerBookInfoProps> = ({ winnerInfo, ...rest }) => {

  return (
    <div>
      <div>{winnerInfo.user.username}</div>
      <div>{winnerInfo.book.title}</div>
    </div>
  );
};

export default WheelContainerBookData;
