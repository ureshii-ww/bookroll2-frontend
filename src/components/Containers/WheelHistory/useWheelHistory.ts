import useAppDispatch from '../../../hooks/useAppDispatch';
import { confirmClubWheelWinner } from '../../../store/reducers/club-wheel/wheel-winner';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { closeModal } from '../../../store/reducers/modal';

const useWheelHistory = (clubUrl: string) => {

  const dispatch = useAppDispatch();
  const rollsHistory = useAppSelector(state => state.clubWheel.history.data);

  const confirmBook = (index: number) => {
    if (clubUrl && rollsHistory) {
      dispatch(confirmClubWheelWinner({ clubUrl, book: rollsHistory[index].book.id }));
      dispatch(closeModal());
    }
  };

  return { confirmBook, rollsHistory };
};

export default useWheelHistory;
