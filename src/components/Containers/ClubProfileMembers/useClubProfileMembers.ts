import { useEffect } from 'react';
import { useClubProfileContext } from '../../Pages/ClubProfilePage/ClubProfilePage';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { loadClubProfileMembers, resetClubProfileMembers } from '../../../store/reducers/club-profile/members';
import { useAppSelector } from '../../../hooks/useAppSelector';

const useClubProfileMembers = () => {
  const { data: usersInfo, isLoading } = useAppSelector(state => state.clubProfile.members);
  const { clubUrl } = useClubProfileContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadClubProfileMembers(clubUrl));

    return () => {
      dispatch(resetClubProfileMembers());
    }
  }, [clubUrl]);

  return { usersInfo, clubUrl, isLoading };
};

export default useClubProfileMembers;