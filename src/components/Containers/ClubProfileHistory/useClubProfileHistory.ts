import { useClubProfileContext } from '../../Pages/ClubProfilePage/ClubProfilePage';
import { useEffect } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { loadClubProfileHistory, resetClubProfileHistory } from '../../../store/reducers/club-profile/history';

const useClubProfileHistory = () => {
  const { data: chosenBooksHistory, isLoading } = useAppSelector(state => state.clubProfile.history);
  const { clubUrl } = useClubProfileContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadClubProfileHistory(clubUrl));

    return () => {
      dispatch(resetClubProfileHistory());
    }
  }, [clubUrl]);

  return { chosenBooksHistory, isLoading, clubUrl };
};

export default useClubProfileHistory;