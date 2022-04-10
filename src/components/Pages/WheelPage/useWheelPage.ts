import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import {
  loadClubWheelBooks,
  resetClubWheelBooksList,
} from '../../../store/reducers/club-wheel/books-list';
import { resetClubWheelStage } from '../../../store/reducers/club-wheel/wheel-stages';
import { resetClubWheelBooksHistory } from '../../../store/reducers/club-wheel/wheel-history';
import { resetClubWheelSegments } from '../../../store/reducers/club-wheel/wheel-segments';
import { resetClubWheelWinner } from '../../../store/reducers/club-wheel/wheel-winner';

const useWheelPage = () => {
  const { clubUrl } = useParams();
  const dispatch = useAppDispatch();
  const { data: clubBooks, isLoading } = useAppSelector(state => state.clubWheel.booksList);
  const [booksKey, setBooksKey] = useState('');
  const [booksCount, setBooksCount] = useState<number>(0);

  const resetClubWheelStates = () => {
    dispatch(resetClubWheelStage());
    dispatch(resetClubWheelBooksList());
    dispatch(resetClubWheelBooksHistory());
    dispatch(resetClubWheelSegments());
    dispatch(resetClubWheelWinner());
  }

  useEffect(() => {
    resetClubWheelStates();
    if (clubUrl) {
      dispatch(loadClubWheelBooks(clubUrl));
    }
  }, []);

  useEffect(() => {
    if(clubBooks) {
      let sum = 0;
      clubBooks.forEach(user => {
        sum += user.books.length;
      })
      setBooksCount(sum)
    }
  }, [clubBooks])

  const handleSetBooksKey = (rollsCount: number) => {
    setBooksKey(rollsCount.toString());
  };

  return { clubBooks, isLoading, booksKey, booksCount, handleSetBooksKey };
};

export default useWheelPage;
