import React, { FC } from 'react';
import { WheelWinnerInfo } from '../../../../models/wheel-winner-info';
import WheelContainerBookData from '../WheelContainerBookData/WheelContainerBookData';
import './wheel-container-info.scss';

interface WheelContainerInfoProps {
  readonly winnerInfo: WheelWinnerInfo | null;
}

const WheelContainerInfo: FC<WheelContainerInfoProps> = ({ winnerInfo, ...rest }) => {
  return (
    <div className="wheel-container-info">
      {!winnerInfo && <div className="wheel-container-info__placeholder">Нажмите на кнопку «Раскрутить»</div>}
      {winnerInfo && <WheelContainerBookData winnerInfo={winnerInfo} />}
    </div>
  );
};

export default WheelContainerInfo;
