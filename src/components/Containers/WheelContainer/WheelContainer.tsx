import React, { FC } from 'react';
import { ClubBooks } from '../../../models/club-books';
import useWheelContainer from './useWheelContainer';
import WinWheel from '../../UI/WinWheel/WinWheel';
import WheelContainerStart from './WheelContainerStart/WheelContainerStart';
import WheelContainerInfo from './WheelContainerInfo/WheelContainerInfo';
import WheelContainerFinish from './WheelContainerFinish/WheelContainerFinish';

interface WheelContainerProps {
  clubBooks: ClubBooks[];
}

const WheelContainer: FC<WheelContainerProps> = ({ clubBooks, ...rest }) => {
  const { winnerInfo, wheelSegments, currentStage, handleWinner, startRoll } = useWheelContainer(clubBooks);

  return (
    <div>
      {currentStage === 'start' && <WheelContainerStart startRoll={startRoll} />}
      {currentStage === 'roll' && (
        <WinWheel
          handleWinner={handleWinner}
          segments={wheelSegments}
          sizeOptions={{ canvasWidth: 600, canvasHeight: 600 }}
          animationOptions={{type: 'spinToStop'}}
        />
      )}
      {currentStage === 'bookInfo' && winnerInfo && (
        <WheelContainerInfo startRoll={startRoll} winnerInfo={winnerInfo} />
      )}
      {currentStage === 'finish' && winnerInfo && <WheelContainerFinish winnerInfo={winnerInfo} />}
    </div>
  );
};

export default WheelContainer;
