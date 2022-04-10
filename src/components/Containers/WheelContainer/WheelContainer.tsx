import React, { FC } from 'react';
import useWheelContainer from './hooks/useWheelContainer';
import WinWheel from '../../UI/WinWheel/WinWheel';
import WheelContainerInfo from './WheelContainerInfo/WheelContainerInfo';
import WheelContainerControls from './WheelContainerControls/WheelContainerControls';
import useWheelSettings from './hooks/useWheelSettings';
import { WheelAnimationOptions } from '../../UI/WinWheel/models/wheel-animation-options';
import TransparentButton from '../../UI/TransparentButton/TransparentButton';
import { ReactComponent as DetailsSvg } from '../../../assets/svg/details.svg';
import { ReactComponent as TriangleSvg } from '../../../assets/svg/triangle.svg';
import './wheel-container.scss';
import useWindowDimensions from '../../../hooks/useDimensions';
import { WheelStages } from '../../../store/reducers/club-wheel/wheel-stages/types';

export interface WheelContainerProps {
  handleSetBooksKey: (rollsCount: number) => void;
}

const WheelContainer: FC<WheelContainerProps> = ({ handleSetBooksKey }) => {
  const { width } = useWindowDimensions();
  const { handleSetTime, handeSetSpinsNumber, recountTextSize, spinsNumber, spinTime, textSize } = useWheelSettings();
  const { handleWinner, currentStage, wheelSegments, rollCount, handleOpenHistory } =
    useWheelContainer(handleSetBooksKey);

  const wheelAnimationOptions: WheelAnimationOptions =
    currentStage !== WheelStages.START
      ? {
          type: 'spinToStop',
          spins: spinsNumber,
          duration: spinTime,
        }
      : { spins: 0 };

  if (width < 700) {
    return <div className="wheel-container__placeholder">Ваш экран слишком мал для колеса</div>;
  }

  return (
    <div className={currentStage === WheelStages.ROLL ? 'wheel-container wheel-container--roll' : 'wheel-container'}>
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
          <WheelContainerInfo />
          <WheelContainerControls
            handleSetTime={handleSetTime}
            handeSetSpinsNumber={handeSetSpinsNumber}
            recountTextSize={recountTextSize}
          />
        </div>
      </div>
      <div className="wheel-container__history-button-wrapper">
        <TransparentButton className="wheel-container__history-button" onClick={handleOpenHistory}>
          История
          <DetailsSvg />
        </TransparentButton>
      </div>
    </div>
  );
};

export default WheelContainer;
