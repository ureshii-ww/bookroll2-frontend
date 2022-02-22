import { FormEvent, useEffect, useState } from 'react';
import countSpinsNumber from '../helpers/countSpinsNumber';
import countTextSize from '../helpers/countTextSize';

const useWheelSettings = () => {
  const [spinTime, setSpinTime] = useState<number>(10);
  const [spinsNumber, setSpinsNumber] = useState(10);
  const [textSize, setTextSize] = useState(14);
  const handleSetTime = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.replace(/\D/, '');
    const intValue = parseInt(value);
    if (intValue === 0) {
      event.currentTarget.value = '1';
      setSpinTime(1);
    } else if (!intValue) {
      event.currentTarget.value = '';
      setSpinTime(10);
    } else {
      event.currentTarget.value = value;
      setSpinTime(intValue);
    }
  };

  const handeSetSpinsNumber = () => {
    const spinsNumber = countSpinsNumber(spinTime);
    setSpinsNumber(spinsNumber);
  };

  const recountTextSize = (segmentsNumber: number) => {
    const newTextSize = countTextSize(segmentsNumber);
    setTextSize(newTextSize);
  }

  useEffect(() => {
    handeSetSpinsNumber();
  }, [spinTime]);

  return { handleSetTime, handeSetSpinsNumber, recountTextSize, spinsNumber, spinTime, textSize };
};

export default useWheelSettings;