import { useEffect, useState } from 'react';
import { WheelWinnerInfo } from '../../../../models/wheel-winner-info';
import { WheelSegment } from '../../../UI/WinWheel/models/wheel-segment';
import { ClubBooks } from '../../../../models/club-books';
import findWinnerInfoBySegment from '../helpers/findWinnerInfoBySegment';

interface useWheelWinnerArgs {
  clubBooks: ClubBooks[];
  displayWinner: (userIndex: number, bookIndex: number) => void;
  wheelSegments: WheelSegment[];
  isFinish: boolean;
  addToHistory: (winner: WheelWinnerInfo) => void;
}

const useWheelWinner = (args: useWheelWinnerArgs) => {
  const { clubBooks, wheelSegments, displayWinner, isFinish, addToHistory } = args;
  const [winnerInfo, setWinnerInfo] = useState<WheelWinnerInfo | null>(null);

  const setWinner = (segment: WheelSegment) => {
    const winnerInfo = findWinnerInfoBySegment(clubBooks, segment);
    setWinnerInfo(winnerInfo);
  };

  useEffect(() => {
    if (winnerInfo) {
      if (!isFinish) {
        displayWinner(winnerInfo.indexUser, winnerInfo.indexBook);
        addToHistory(winnerInfo);
      } else {
        const trueWinnerInfo = findWinnerInfoBySegment(clubBooks, wheelSegments[0]);
        displayWinner(trueWinnerInfo.indexUser, trueWinnerInfo.indexBook);
        addToHistory(trueWinnerInfo);
      }
    }
  }, [winnerInfo]);

  return { winnerInfo, setWinner };
};

export default useWheelWinner;