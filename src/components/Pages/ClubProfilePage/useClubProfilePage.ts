import { useParams } from 'react-router-dom';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useEffect } from 'react';
import { loadClubProfileInfo } from '../../../store/reducers/club-profile/info';

const useClubProfilePage = () => {
  const { clubUrl } = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.clubProfile.info.isLoading);

  useEffect(() => {
    if (!isLoading && clubUrl && clubUrl.length > 0) {
      dispatch(loadClubProfileInfo(clubUrl));
    }
  }, []);

  return { clubUrl, isLoading };
};

export default useClubProfilePage;