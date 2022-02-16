import React, { FC } from 'react';
import SubmitButton from '../../../UI/SubmitButton/SubmitButton';

interface WheelContainerStartProps {
  startRoll: () => void;
}

const WheelContainerStart: FC<WheelContainerStartProps> = ({startRoll, ...rest}) => {

  return (
    <div>
      <SubmitButton onClick={startRoll}>Начать</SubmitButton>
    </div>
  );
};

export default WheelContainerStart;