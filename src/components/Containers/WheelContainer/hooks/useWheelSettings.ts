import { FormEvent, useEffect, useState } from 'react';
import countSpinsNumber from '../helpers/countSpinsNumber';

const useWheelSettings = () => {
  const [spinTime, setSpinTime] = useState<number>(10);
  const [spinsNumber, setSpinsNumber] = useState(10);
  const handleSetTime = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.replace(/\D/, '');
    const intValue = parseInt(value);
    if (intValue === 0) {
      event.currentTarget.value = '1';
      setSpinTime(1);
    } else if (!intValue) {
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

  useEffect(() => {
    handeSetSpinsNumber();
  }, [spinTime]);

  return { handleSetTime, handeSetSpinsNumber, spinsNumber, spinTime };
};

export default useWheelSettings;