import React, { FC, FormEvent, MutableRefObject, RefObject } from 'react';
import MainButton from '../../../UI/MainButton/MainButton';
import { WheelWinnerInfo } from '../../../../models/wheel-winner-info';
import InputText from '../../../UI/InputText/InputText';

interface WheelContainerControlsProps {
  readonly startRoll: () => void;
  readonly confirmBook: () => void;
  readonly winnerInfo: WheelWinnerInfo | null;
  readonly handleSetTime: (event: FormEvent<HTMLInputElement>) => void;
  readonly isRoll: boolean;
  readonly isFinish: boolean;
}

const WheelContainerControls: FC<WheelContainerControlsProps> = props => {
  const { startRoll, confirmBook, winnerInfo, isRoll, isFinish, handleSetTime, ...rest } = props;
  return (
    <div>
      {!isFinish ? (
        <div>
          <InputText disabled={isRoll} maxLength={2} onChange={handleSetTime} />
          <MainButton disabled={isRoll} onClick={startRoll}>
            Крутить
          </MainButton>
        </div>
      ) : (
        <MainButton onClick={confirmBook}>Подтвердить книгу</MainButton>
      )}
    </div>
  );
};

export default WheelContainerControls;
