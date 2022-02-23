import { useAppSelector } from '../../../hooks/useAppSelector';
import { useEffect, useState } from 'react';
import { UserProfileInfo } from '../../../models/user-profile-info';
import { useRequestPage } from '../../../hooks/useRequestPage';
import UserService from '../../../services/user.service';

const useUserProfileHeader = (userUrl: string, setIsLoaded: () => void) => {
  const authUserData = useAppSelector(state => state.auth.userData);
  const [userInfo, setUserInfo] = useState<UserProfileInfo>({
    username: null,
    color: null,
    emoji: null,
    clubname: null,
    clubUrl: null,
  });

  const fetchInfo = useRequestPage(async (userUrl: string) => {
    const response = await UserService.getUserProfileInfo(userUrl);
    setUserInfo(response.data);
    setIsLoaded();
  });

  useEffect(() => {
    fetchInfo(userUrl);
  }, [authUserData]);

  return { userInfo };
};

export default useUserProfileHeader;