import { useEffect, useState } from 'react';
import { WheelSegment } from '../../../UI/WinWheel/models/wheel-segment';
import ClubService from '../../../../services/club.service';
import { RouteNames } from '../../../../routes/route-names.enum';
import { useNavigate, useParams } from 'react-router-dom';
import { useActions } from '../../../../hooks/useActions';
import { WheelContainerProps } from '../WheelContainer';
import useWheelSegments from './useWheelSegments';
import useWheelWinner from './useWheelWinner';
import useWheelRollsHistory from './useWheelRollsHistory';
import useRequest from '../../../../hooks/useRequest';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import { setClubWheelStage } from '../../../../store/reducers/club-wheel/wheel-stages';
import { WheelStages } from '../../../../store/reducers/club-wheel/wheel-stages/types';
import { useAppSelector } from '../../../../hooks/useAppSelector';

const useWheelContainer = (
  { clubBooks, handleSetBooksKey, displayWinner }: WheelContainerProps,
  handeSetSpinsNumber: () => void,
  recountTextSize: (segmentsNumber: number) => void
) => {
  const { clubUrl } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentStage = useAppSelector(state => state.clubWheel.stages.currentStage);
  const { addNotification } = useActions();
  const [rollCount, setRollCount] = useState(0);
  const { wheelSegments, shuffleSegments, removeWinnerSegment } = useWheelSegments(clubBooks, recountTextSize);
  const { wheelRollsHistory, addToHistory } = useWheelRollsHistory();
  const { winnerInfo, setWinner } = useWheelWinner({ clubBooks, displayWinner, wheelSegments, addToHistory });

  const confirmBook = useRequest('Post', async () => {
    const response = await ClubService.confirmBook(clubUrl || '', winnerInfo?.book.id || '');
    if (response.data === 'Success') {
      addNotification('Книга успешно выбрана', 'success');
      navigate(`${RouteNames.CLUB_PROFILE_BASE}${clubUrl}`);
    }
  });

  const handleWinner = (segment: WheelSegment) => {
    removeWinnerSegment(segment);
    if (wheelSegments.length === 2) {
      dispatch(setClubWheelStage(WheelStages.WINNER));
    } else {
      dispatch(setClubWheelStage(WheelStages.WINNER));
    }
    setWinner(segment);
  };

  const startRoll = () => {
    handeSetSpinsNumber();
    recountTextSize(wheelSegments.length);
    shuffleSegments();
    dispatch(setClubWheelStage(WheelStages.ROLL));
    setRollCount(value => value + 1);
  };

  //Функция для изменения ключа книг в списке книг
  useEffect(() => {
    handleSetBooksKey(rollCount);
  }, [rollCount]);

  return {
    currentStage,
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
