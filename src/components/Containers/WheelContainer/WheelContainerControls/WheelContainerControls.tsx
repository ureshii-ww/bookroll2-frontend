import React, { FC, FormEvent, Fragment } from 'react';
import MainButton from '../../../UI/MainButton/MainButton';
import InputText from '../../../UI/InputText/InputText';
import './wheel-container-controls.scss';
import { WheelStages } from '../../../../store/reducers/club-wheel/wheel-stages/types';
import { useWheelContainerControls } from './useWheelContainerControls';

interface WheelContainerControlsProps {
  readonly handleSetTime: (event: FormEvent<HTMLInputElement>) => void;
  handeSetSpinsNumber: () => void;
  recountTextSize: (segmentsNumber: number) => void;
}

const WheelContainerControls: FC<WheelContainerControlsProps> = props => {
  const { handleSetTime, handeSetSpinsNumber, recountTextSize } = props;
  const { currentStage, startRoll, confirmBook } = useWheelContainerControls(handeSetSpinsNumber, recountTextSize);

  return (
    <div
      className={
        currentStage === WheelStages.FINISH
          ? 'wheel-container-controls wheel-container-controls--finish'
          : 'wheel-container-controls'
      }>
      {currentStage !== WheelStages.FINISH ? (
        <Fragment>
          <div className="wheel-container-controls__input-group">
            <label className="wheel-container-controls__input-label" htmlFor="spin-time">
              Продолжительность вращения
            </label>
            <InputText
              className="wheel-container-controls__input"
              name="spin-time"
              maxLength={2}
              onChange={handleSetTime}
            />
          </div>
          <MainButton className="wheel-container-controls__button" onClick={startRoll}>
            Раскрутить
          </MainButton>
        </Fragment>
      ) : (
        <MainButton onClick={confirmBook} className="main-button--green">
          Подтвердить книгу
        </MainButton>
      )}
    </div>
  );
};

export default WheelContainerControls;
