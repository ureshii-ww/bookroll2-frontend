import { useClubProfileContext } from '../../Pages/ClubProfilePage/ClubProfilePage';
import { useEffect, useState } from 'react';
import useRequest from '../../../hooks/useRequest';
import ClubService from '../../../services/club.service';
import { BookData } from '../../../models/book-data';
import { useAppSelector } from '../../../hooks/useAppSelector';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { loadClubProfileHistory } from '../../../store/reducers/club-profile/history';

const useClubProfileHistory = () => {
  const { data: chosenBooksHistory, isLoading } = useAppSelector(state => state.clubProfile.history);
  const { clubUrl } = useClubProfileContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadClubProfileHistory(clubUrl));
  }, [clubUrl]);

  return { chosenBooksHistory, isLoading, clubUrl };
};

export default useClubProfileHistory;