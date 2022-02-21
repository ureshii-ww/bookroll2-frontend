import React, { FC } from 'react';
import { WheelWinnerInfo } from '../../../../models/wheel-winner-info';
import WheelContainerBookData from '../WheelContainerBookData/WheelContainerBookData';

interface WheelContainerInfoProps {
  readonly winnerInfo: WheelWinnerInfo | null;
}

const WheelContainerInfo: FC<WheelContainerInfoProps> = ({ winnerInfo, ...rest }) => {
  return (
    <div>
      {winnerInfo && <WheelContainerBookData winnerInfo={winnerInfo}/>}
    </div>
  )
};

export default WheelContainerInfo;