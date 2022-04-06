import React, { FC } from 'react';
import { ClubBooks } from '../../../models/club-books';
import useWheelContainer from './hooks/useWheelContainer';
import WinWheel from '../../UI/WinWheel/WinWheel';
import WheelContainerInfo from './WheelContainerInfo/WheelContainerInfo';
import WheelContainerControls from './WheelContainerControls/WheelContainerControls';
import useWheelSettings from './hooks/useWheelSettings';
import { WheelAnimationOptions } from '../../UI/WinWheel/models/wheel-animation-options';
import TransparentButton from '../../UI/TransparentButton/TransparentButton';
import { useActions } from '../../../hooks/useActions';
import WheelHistory from '../WheelHistory/WheelHistory';
import { ReactComponent as DetailsSvg } from '../../../assets/svg/details.svg';
import { ReactComponent as TriangleSvg } from '../../../assets/svg/triangle.svg';
import './wheel-container.scss';
import useWindowDimensions from '../../../hooks/useDimensions';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { openModal } from '../../../store/reducers/modal';

export interface WheelContainerProps {
  clubBooks: ClubBooks[];
  displayWinner: (userIndex: number, bookIndex: number) => void;
  handleSetBooksKey: (rollsCount: number) => void;
}

const WheelContainer: FC<WheelContainerProps> = ({ clubBooks, displayWinner, handleSetBooksKey, ...rest }) => {
  const dispatch = useAppDispatch();
  const { width } = useWindowDimensions();
  const { handleSetTime, handeSetSpinsNumber, recountTextSize, spinsNumber, spinTime, textSize } = useWheelSettings();
  const { hookData, wheelWinner, wheelStages } = useWheelContainer(
    { clubBooks, handleSetBooksKey, displayWinner },
    handeSetSpinsNumber,
    recountTextSize
  );
  const { wheelSegments, wheelRollsHistory, rollCount, startRoll, confirmBook } = hookData;
  const { isStart, isRoll, isFinish } = wheelStages;
  const { winnerInfo, handleWinner } = wheelWinner;

  const wheelAnimationOptions: WheelAnimationOptions = !isStart
    ? {
        type: 'spinToStop',
        spins: spinsNumber,
        duration: spinTime,
      }
    : { spins: 0 };

  const handleOpenHistory = () => {
    dispatch(openModal(<WheelHistory rollsHistory={wheelRollsHistory} />))
  }

  if (width < 700) {
    return <div className="wheel-container__placeholder">Ваш экран слишком мал для колеса</div>;
  }

  return (
    <div className={isRoll ? 'wheel-container wheel-container--roll' : 'wheel-container'}>
      <div className="wheel-container__wheel">
        <div className="wheel-container__triangle">
          <TriangleSvg />
        </div>
        <WinWheel
          key={`${wheelSegments.length === 0}-${rollCount}`}
          handleWinner={handleWinner}
          segments={wheelSegments}
          sizeOptions={{ canvasWidth: 600, canvasHeight: 600, innerRadius: 40 }}
          textOptions={{ textFontSize: textSize, textFontFamily: 'Inter', textFontWeight: 600 }}
          renderOptions={{ lineWidth: 1, strokeStyle: '#737373' }}
          animationOptions={wheelAnimationOptions}
        />
      </div>
      <div className="wheel-container__side-wrapper">
        <div className="wheel-container__side">
          <WheelContainerInfo winnerInfo={winnerInfo} />
          <WheelContainerControls
            isRoll={isRoll}
            confirmBook={confirmBook}
            isFinish={isFinish}
            startRoll={startRoll}
            handleSetTime={handleSetTime}
          />
        </div>

      </div>
      <div className="wheel-container__history-button-wrapper">
        <TransparentButton
          className="wheel-container__history-button"
          onClick={handleOpenHistory}>
          История
          <DetailsSvg />
        </TransparentButton>
      </div>
    </div>
  );
};

export default WheelContainer;
