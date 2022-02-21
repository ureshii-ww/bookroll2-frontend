import React, { FC, useEffect } from 'react';
import { ClubBooks } from '../../../models/club-books';
import useWheelContainer from './hooks/useWheelContainer';
import WinWheel from '../../UI/WinWheel/WinWheel';
import WheelContainerInfo from './WheelContainerInfo/WheelContainerInfo';
import './wheel-container.scss';
import WheelContainerControls from './WheelContainerControls/WheelContainerControls';
import useWheelSettings from './hooks/useWheelSettings';
import { WheelAnimationOptions } from '../../UI/WinWheel/models/wheel-animation-options';
import TransparentButton from '../../UI/TransparentButton/TransparentButton';
import { useActions } from '../../../hooks/useActions';
import WheelHistory from '../WheelHistory/WheelHistory';
import useWheelSegments from './hooks/useWheelSegments';

export interface WheelContainerProps {
  clubBooks: ClubBooks[];
  displayWinner: (userIndex: number, bookIndex: number) => void;
  handleSetBooksKey: (rollsCount: number) => void;
}

const WheelContainer: FC<WheelContainerProps> = ({ clubBooks, displayWinner, handleSetBooksKey, ...rest }) => {
  const { showModal } = useActions();
  const { handleSetTime, handeSetSpinsNumber, spinsNumber, spinTime } = useWheelSettings();
  const { wheelSegments, wheelWinner, wheelStages, wheelRollsHistory, confirmBook, rollCount, startRoll } =
    useWheelContainer({ clubBooks, handleSetBooksKey, displayWinner }, handeSetSpinsNumber);
  const {isStart, isRoll, isFinish} = wheelStages;
  const {winnerInfo, handleWinner} = wheelWinner;

  const wheelAnimationOptions: WheelAnimationOptions = !isStart
    ? {
        type: 'spinToStop',
        spins: spinsNumber,
        duration: spinTime,
      }
    : { spins: 0 };

  return (
    <div className="wheel-container">
      <div>
        <WinWheel
          key={`${wheelSegments.length === 0}-${rollCount}`}
          handleWinner={handleWinner}
          segments={wheelSegments}
          sizeOptions={{ canvasWidth: 600, canvasHeight: 600, responsive: true }}
          animationOptions={wheelAnimationOptions}
        />
      </div>
      <WheelContainerInfo winnerInfo={winnerInfo} />
      <WheelContainerControls
        isRoll={isRoll}
        confirmBook={confirmBook}
        isFinish={isFinish}
        winnerInfo={winnerInfo}
        startRoll={startRoll}
        handleSetTime={handleSetTime}
      />
      <TransparentButton onClick={() => showModal(<WheelHistory rollsHistory={wheelRollsHistory} />)}>
        История
      </TransparentButton>
    </div>
  );
};

export default WheelContainer;
