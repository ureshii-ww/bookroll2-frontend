import { useState } from 'react';

export enum WheelStages {
  START = 'START',
  ROLL = 'ROLL',
  FINISH = 'FINISH',
}

const useWheelStages = () => {
  const [isStart, setIsStart] = useState(true);
  const [isRoll, setIsRoll] = useState(false);
  const [isFinish, setIsFinish] = useState(false);

  const setStage = (stageName: WheelStages, value: boolean) => {
    switch (stageName) {
      case WheelStages.START:
        setIsStart(value);
        break;
      case WheelStages.ROLL:
        setIsRoll(value);
        break;
      case WheelStages.FINISH:
        setIsFinish(value);
    }
  };

  return { isStart, isRoll, isFinish, setStage };
};

export default useWheelStages;
