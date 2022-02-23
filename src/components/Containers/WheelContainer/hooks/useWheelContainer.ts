import { useEffect, useState } from 'react';
import { WheelSegment } from '../../../UI/WinWheel/models/wheel-segment';
import { useRequestPage } from '../../../../hooks/useRequestPage';
import ClubService from '../../../../services/club.service';
import { RouteNames } from '../../../../routes/route-names.enum';
import { useNavigate, useParams } from 'react-router-dom';
import { useActions } from '../../../../hooks/useActions';
import { WheelContainerProps } from '../WheelContainer';
import useWheelSegments from './useWheelSegments';
import useWheelWinner from './useWheelWinner';
import useWheelRollsHistory from './useWheelRollsHistory';
import useWheelStages, { WheelStages } from './useWheelStages';
import { useRequestPost } from '../../../../hooks/useRequestPost';

const useWheelContainer = (
  { clubBooks, handleSetBooksKey, displayWinner }: WheelContainerProps,
  handeSetSpinsNumber: () => void,
  recountTextSize: (segmentsNumber: number) => void,
) => {
  const { clubUrl } = useParams();
  const navigate = useNavigate();
  const { addNotification } = useActions();
  const [rollCount, setRollCount] = useState(0);
  const { isStart, isRoll, isFinish, setStage } = useWheelStages();
  const { wheelSegments, shuffleSegments, removeWinnerSegment } = useWheelSegments(clubBooks, recountTextSize);
  const { wheelRollsHistory, addToHistory } = useWheelRollsHistory();
  const { winnerInfo, setWinner } = useWheelWinner({ clubBooks, displayWinner, wheelSegments, isFinish, addToHistory });

  const confirmBook = useRequestPost(async () => {
    const response = await ClubService.confirmBook(clubUrl || '', winnerInfo?.book.id || '');
    if (response.data === 'Success') {
      addNotification('Книга успешно выбрана', 'success');
      navigate(`${RouteNames.CLUB_PROFILE_BASE}${clubUrl}`);
    }
  });

  const handleWinner = (segment: WheelSegment) => {
    removeWinnerSegment(segment);
    setStage(WheelStages.ROLL, false);
    if (wheelSegments.length === 2) {
      setStage(WheelStages.FINISH, true);
    }
    setWinner(segment);
  };

  const startRoll = () => {
    handeSetSpinsNumber();
    recountTextSize(wheelSegments.length);
    shuffleSegments();
    if (isStart) {
      setStage(WheelStages.START, false);
    }
    setStage(WheelStages.ROLL, true);
    setRollCount(value => value + 1);
  };

  //Функция для изменения ключа книг в списке книг
  useEffect(() => {
    handleSetBooksKey(rollCount);
  }, [rollCount]);

  return {
    wheelStages: {
      isStart,
      isRoll,
      isFinish,
    },
    wheelWinner: {
      winnerInfo,
      handleWinner,
    },
    hookData: {
      wheelSegments,
      wheelRollsHistory,
      rollCount,
      startRoll,
      confirmBook,
    },
  };
};

export default useWheelContainer;
