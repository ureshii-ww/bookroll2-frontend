import React, { FC, Fragment } from 'react';
import UserSettingsInfoForm from './UserSettingsInfoForm/UserSettingsInfoForm';
import useUserSettingsInfo from './useUserSettingsInfo';
import './user-settings-info.scss';

interface UserInfoProps {
  userUrl: string;
}

const UserSettingsInfo: FC<UserInfoProps> = ({ userUrl, ...rest }) => {
  const { userInfo, isLoading } = useUserSettingsInfo(userUrl);

  return (
    <Fragment>
      <UserSettingsInfoForm
        key={`${userInfo.username}-user-info`}
        username={userInfo.username}
        color={userInfo.color}
        emoji={userInfo.emoji}
        userUrl={userUrl || ''}
        disabled={isLoading}
      />
    </Fragment>
  );
};

export default UserSettingsInfo;
