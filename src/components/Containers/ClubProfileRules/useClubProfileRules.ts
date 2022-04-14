import { useEffect } from 'react';
import { useClubProfileContext } from '../../Pages/ClubProfilePage/ClubProfilePage';
import { useAppSelector } from '../../../hooks/useAppSelector';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { loadClubProfileRules, resetClubProfileRules } from '../../../store/reducers/club-profile/rules';

const useClubProfileRules = () => {
  const {data: clubRules, isLoading} = useAppSelector(state => state.clubProfile.rules);
  const { clubUrl } = useClubProfileContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadClubProfileRules(clubUrl));

    return () => {
      dispatch(resetClubProfileRules());
    }
  }, [clubUrl]);

  return { clubRules, isLoading };
};

export default useClubProfileRules;