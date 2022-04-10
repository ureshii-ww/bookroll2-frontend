import { useAppSelector } from '../../../../hooks/useAppSelector';
import { shuffleClubWheelSegments } from '../../../../store/reducers/club-wheel/wheel-segments';
import { setClubWheelStage } from '../../../../store/reducers/club-wheel/wheel-stages';
import { WheelStages } from '../../../../store/reducers/club-wheel/wheel-stages/types';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import { incrementClubWheelRollsCount } from '../../../../store/reducers/club-wheel/wheel-history';
import { confirmClubWheelWinner } from '../../../../store/reducers/club-wheel/wheel-winner';
import { useParams } from 'react-router-dom';

export const useWheelContainerControls = (
  handeSetSpinsNumber: () => void,
  recountTextSize: (segmentsNumber: number) => void
) => {
  const dispatch = useAppDispatch();
  const { clubUrl } = useParams();
  const currentStage = useAppSelector(state => state.clubWheel.stages.currentStage);
  const wheelSegments = useAppSelector(state => state.clubWheel.segments.data);
  const winner = useAppSelector(state => state.clubWheel.winner.data);

  const startRoll = () => {
    handeSetSpinsNumber();
    recountTextSize(wheelSegments.length);
    dispatch(shuffleClubWheelSegments());
    dispatch(setClubWheelStage(WheelStages.ROLL));
    dispatch(incrementClubWheelRollsCount());
  };

  const confirmBook = () => {
    if (winner && clubUrl) {
      dispatch(confirmClubWheelWinner({ clubUrl, book: winner.book.id }));
    }
  };

  return { currentStage, startRoll, confirmBook };
};
