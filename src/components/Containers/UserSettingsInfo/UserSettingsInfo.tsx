import React, { FC, useEffect, useState } from 'react';
import UserSettingsInfoForm from './UserSettingsInfoForm/UserSettingsInfoForm';
import { useRequestPage } from '../../../hooks/useRequestPage';
import UserService from '../../../services/user.service';
import { UserProfileInfo } from '../../../models/user-profile-info';

interface UserInfoProps {
  userUrl: string;
}

const UserSettingsInfo: FC<UserInfoProps> = ({ userUrl, ...rest }) => {
  const [userInfo, setUserInfo] = useState<UserProfileInfo>({
    username: '',
    color: '',
    emoji: '',
    clubname: '',
    clubUrl: '',
  });
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const fetchInfo = useRequestPage(async (userUrl: string) => {
    const response = await UserService.getUserProfileInfo(userUrl);
    setUserInfo(response.data);
    setIsLoaded(true);
  });

  useEffect(() => {
    fetchInfo(userUrl);
  }, []);

  return isLoaded ? (
    <UserSettingsInfoForm
      username={userInfo.username}
      color={userInfo.color}
      emoji={userInfo.emoji}
      userUrl={userUrl || ''}
    />
  ) : (
    <div>Loading...</div>
  );
};

export default UserSettingsInfo;
