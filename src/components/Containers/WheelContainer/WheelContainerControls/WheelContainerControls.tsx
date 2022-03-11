import React, { FC, FormEvent, Fragment } from 'react';
import MainButton from '../../../UI/MainButton/MainButton';
import InputText from '../../../UI/InputText/InputText';
import './wheel-container-controls.scss';

interface WheelContainerControlsProps {
  readonly startRoll: () => void;
  readonly confirmBook: (args: any) => void;
  readonly handleSetTime: (event: FormEvent<HTMLInputElement>) => void;
  readonly isRoll: boolean;
  readonly isFinish: boolean;
}

const WheelContainerControls: FC<WheelContainerControlsProps> = props => {
  const { startRoll, confirmBook, isRoll, isFinish, handleSetTime } = props;
  return (
    <div className="wheel-container-controls">
      {!isFinish ? (
        <Fragment>
          <div className="wheel-container-controls__input-group">
            <label className="wheel-container-controls__input-label" htmlFor="spin-time">
              Продолжительность вращения
            </label>
            <InputText
              className="wheel-container-controls__input"
              name="spin-time"
              disabled={isRoll}
              maxLength={2}
              onChange={handleSetTime}
            />
          </div>
          <MainButton className="wheel-container-controls__button" disabled={isRoll} onClick={startRoll}>
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
