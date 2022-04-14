import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { loadUserProfileInfo, resetUserProfileInfo } from '../../../store/reducers/user-profile/info';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';

const useUserProfilePage = () => {
  const { userUrl } = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.userProfile.info.isLoading);
  const error = useAppSelector(state => state.userProfile.info.error);
  const isCurrentUser = useAppSelector(state => state.auth.userData?.url === userUrl);

  useEffect(() => {
    if (!isLoading && userUrl && userUrl.length > 0) {
      dispatch(loadUserProfileInfo(userUrl));
    }

    return () => {
      dispatch(resetUserProfileInfo());
    }
  }, []);

  return { userUrl, isLoading, isCurrentUser, error };
};

export default useUserProfilePage;
