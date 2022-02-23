import React, { FC } from 'react';
import UserSettingsInfoForm from './UserSettingsInfoForm/UserSettingsInfoForm';
import useUserSettingsInfo from './useUserSettingsInfo';
import PageLoader from '../../UI/PageLoader/PageLoader';
import './user-settings-info.scss';

interface UserInfoProps {
  userUrl: string;
}

const UserSettingsInfo: FC<UserInfoProps> = ({ userUrl, ...rest }) => {
  const { userInfo, isLoaded } = useUserSettingsInfo(userUrl);

  return isLoaded ? (
    <UserSettingsInfoForm
      username={userInfo.username}
      color={userInfo.color}
      emoji={userInfo.emoji}
      userUrl={userUrl || ''}
    />
  ) : (
    <div className="user-settings-info__loader">
      <PageLoader />
    </div>
  );
};

export default UserSettingsInfo;
