import React, { FC } from 'react';
import { WheelWinnerInfo } from '../../../../models/wheel-winner-info';
import WheelContainerBookData from '../WheelContainerBookData/WheelContainerBookData';
import './wheel-container-info.scss';
import { useAppSelector } from '../../../../hooks/useAppSelector';

const WheelContainerInfo: FC = () => {
  const winnerInfo = useAppSelector(state => state.clubWheel.winner.data);

  return (
    <div className="wheel-container-info">
      {!winnerInfo && <div className="wheel-container-info__placeholder">Нажмите на кнопку <span>Раскрутить</span></div>}
      {winnerInfo && <WheelContainerBookData winnerInfo={winnerInfo} />}
    </div>
  );
};

export default WheelContainerInfo;
