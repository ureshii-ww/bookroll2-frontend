import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { displayClubWheelBooksWinner, loadClubWheelBooks } from '../../../store/reducers/club-wheel/books-list';

const useWheelPage = () => {
  const { clubUrl } = useParams();
  const dispatch = useAppDispatch();
  const { data: clubBooks, isLoading } = useAppSelector(state => state.clubWheel.booksList);
  const [booksKey, setBooksKey] = useState('');

  const displayWinner = (userIndex: number, bookIndex: number) => {
    dispatch(displayClubWheelBooksWinner({ userIndex, bookIndex }));
  };

  useEffect(() => {
    if (clubUrl) {
      dispatch(loadClubWheelBooks(clubUrl));
    }
  }, []);

  const handleSetBooksKey = (rollsCount: number) => {
    setBooksKey(rollsCount.toString());
  };

  return { clubBooks, isLoading, displayWinner, booksKey, handleSetBooksKey };
};

export default useWheelPage;
