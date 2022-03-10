import { useEffect, useState } from 'react';
import { UserProfileInfo } from '../../../models/user-profile-info';
import UserService from '../../../services/user.service';
import useRequest from '../../../hooks/useRequest';

const useUserSettingsInfo = (userUrl: string) => {
  const [userInfo, setUserInfo] = useState<UserProfileInfo>({
    username: '',
    color: '',
    emoji: '',
    clubname: '',
    clubUrl: '',
  });
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const fetchInfo = useRequest('Modal', async () => {
    const response = await UserService.getUserProfileInfo(userUrl);
    setUserInfo(response.data);
    setIsLoaded(true);
  });

  useEffect(() => {
    fetchInfo({});
  }, []);

  return { userInfo, isLoaded };
};

export default useUserSettingsInfo;
