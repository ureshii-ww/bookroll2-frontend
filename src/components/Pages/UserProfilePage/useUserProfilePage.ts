import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { loadUserProfileInfo } from '../../../store/reducers/user-profile/actions';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';

const useUserProfilePage = () => {
  const { userUrl } = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.userProfile.info.loading);
  const isCurrentUser = useAppSelector(state => state.auth.userData?.url === userUrl);

  useEffect(() => {
    if (!isLoading && userUrl && userUrl.length > 0) {
      dispatch(loadUserProfileInfo(userUrl));
    }
  }, []);

  return { userUrl, isLoading, isCurrentUser };
};

export default useUserProfilePage;
