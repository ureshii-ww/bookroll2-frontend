import { useParams } from 'react-router-dom';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useEffect } from 'react';
import { loadClubProfileInfo, resetClubProfileInfo } from '../../../store/reducers/club-profile/info';

const useClubProfilePage = () => {
  const { clubUrl } = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.clubProfile.info.isLoading);
  const error = useAppSelector(state => state.clubProfile.info.error);

  useEffect(() => {
    if (!isLoading && clubUrl && clubUrl.length > 0) {
      dispatch(loadClubProfileInfo(clubUrl));
    }

    return () => {
      dispatch(resetClubProfileInfo());
    }
  }, []);

  return { clubUrl, isLoading, error };
};

export default useClubProfilePage;