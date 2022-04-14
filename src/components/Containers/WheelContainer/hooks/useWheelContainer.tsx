import React, { useEffect } from 'react';
import { WheelSegment } from '../../../UI/WinWheel/models/wheel-segment';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import { setClubWheelStage } from '../../../../store/reducers/club-wheel/wheel-stages';
import { WheelStages } from '../../../../store/reducers/club-wheel/wheel-stages/types';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { createClubWheelSegments, removeClubWheelSegment } from '../../../../store/reducers/club-wheel/wheel-segments';
import { makeClubWheelWinner } from '../../../../store/reducers/club-wheel/wheel-winner';
import { openModal } from '../../../../store/reducers/modal';
import WheelHistory from '../../WheelHistory/WheelHistory';
import { useNavigate, useParams } from 'react-router-dom';

const useWheelContainer = (handleSetBooksKey: (rollsCount: number) => void) => {
  const { clubUrl } = useParams();
  const dispatch = useAppDispatch();
  const currentStage = useAppSelector(state => state.clubWheel.stages.currentStage);
  const clubBooks = useAppSelector(state => state.clubWheel.booksList.data);
  const wheelSegments = useAppSelector(state => state.clubWheel.segments.data);
  const rollCount = useAppSelector(state => state.clubWheel.history.rollsCount);

  const handleOpenHistory = () => {
    dispatch(openModal(<WheelHistory clubUrl={clubUrl || ''}/>));
  };

  const handleWinner = (segment: WheelSegment) => {
    if (clubBooks) {
      dispatch(removeClubWheelSegment(segment));
      dispatch(makeClubWheelWinner({ winnerSegment: segment, clubBooks }));
      if (wheelSegments.length === 2) {
        dispatch(setClubWheelStage(WheelStages.FINISH));
      } else {
        dispatch(setClubWheelStage(WheelStages.WINNER));
      }
    }
  };

  //Функция для изменения ключа книг в списке книг
  useEffect(() => {
    handleSetBooksKey(rollCount);
  }, [rollCount]);

  useEffect(() => {
    if (clubBooks) {
      dispatch(createClubWheelSegments(clubBooks));
    }
  }, []);

  return {
    currentStage,
    handleWinner,
    handleOpenHistory,
    wheelSegments,
    rollCount,
  };
};

export default useWheelContainer;
