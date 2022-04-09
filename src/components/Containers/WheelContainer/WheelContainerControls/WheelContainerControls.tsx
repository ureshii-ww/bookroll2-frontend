import React, { FC, FormEvent, Fragment } from 'react';
import MainButton from '../../../UI/MainButton/MainButton';
import InputText from '../../../UI/InputText/InputText';
import './wheel-container-controls.scss';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { WheelStages } from '../../../../store/reducers/club-wheel/wheel-stages/types';

interface WheelContainerControlsProps {
  readonly startRoll: () => void;
  readonly confirmBook: (args: any) => void;
  readonly handleSetTime: (event: FormEvent<HTMLInputElement>) => void;
}

const WheelContainerControls: FC<WheelContainerControlsProps> = props => {
  const { startRoll, confirmBook, handleSetTime } = props;
  const currentStage = useAppSelector(state => state.clubWheel.stages.currentStage);
  return (
    <div className={currentStage === WheelStages.FINISH ? 'wheel-container-controls wheel-container-controls--finish' : 'wheel-container-controls'}>
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
