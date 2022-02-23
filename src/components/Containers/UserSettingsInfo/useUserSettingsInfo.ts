import { useEffect, useState } from 'react';
import { UserProfileInfo } from '../../../models/user-profile-info';
import { useRequestPage } from '../../../hooks/useRequestPage';
import UserService from '../../../services/user.service';
import { useRequestModal } from '../../../hooks/useRequestModal';

const useUserSettingsInfo = (userUrl: string) => {
  const [userInfo, setUserInfo] = useState<UserProfileInfo>({
    username: '',
    color: '',
    emoji: '',
    clubname: '',
    clubUrl: '',
  });
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const fetchInfo = useRequestModal(async (userUrl: string) => {
    const response = await UserService.getUserProfileInfo(userUrl);
    setUserInfo(response.data);
    setIsLoaded(true);
  });

  useEffect(() => {
    fetchInfo(userUrl);
  }, []);

  return { userInfo, isLoaded };
};

export default useUserSettingsInfo;
