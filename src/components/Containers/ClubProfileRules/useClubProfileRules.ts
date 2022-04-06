import { useEffect, useState } from 'react';
import { useClubProfileContext } from '../../Pages/ClubProfilePage/ClubProfilePage';
import useRequest from '../../../hooks/useRequest';
import ClubService from '../../../services/club.service';
import { useAppSelector } from '../../../hooks/useAppSelector';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { loadClubProfileRules } from '../../../store/reducers/club-profile/rules';

const useClubProfileRules = () => {
  const {data: clubRules, isLoading} = useAppSelector(state => state.clubProfile.rules);
  const { clubUrl } = useClubProfileContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadClubProfileRules(clubUrl));
  }, [clubUrl]);

  return { clubRules, isLoading };
};

export default useClubProfileRules;