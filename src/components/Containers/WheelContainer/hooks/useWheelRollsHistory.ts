import { useState } from 'react';
import { WheelWinnerInfo } from '../../../../models/wheel-winner-info';

const useWheelRollsHistory = () => {
  const [wheelRollsHistory, setWheelRollsHistory] = useState<WheelWinnerInfo[]>([]);

  const addToHistory = (winner: WheelWinnerInfo) => {
    const tempArr = [...wheelRollsHistory];
    tempArr.push(winner);
    setWheelRollsHistory(tempArr);
  }

  return {wheelRollsHistory, addToHistory};
}

export default useWheelRollsHistory;