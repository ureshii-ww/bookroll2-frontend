import React, { FC } from 'react';
import UserSettingsAccountEmail from './UserSettingsAccountEmail/UserSettingsAccountEmail';
import UserSettingsPasswordForm from './UserSettingsAccountPasswordForm/UserSettingsPasswordForm';
import './user-settings-account.scss';
import useUserSettingsAccount from './useUserSettingsAccount';
import PageLoader from '../../UI/PageLoader/PageLoader';

interface UserAccountProps {
  userUrl: string;
}

const UserSettingsAccount: FC<UserAccountProps> = ({ userUrl, ...rest }) => {
  const { accountInfo, isLoaded } = useUserSettingsAccount(userUrl);

  return isLoaded ? (
    <div className="user-settings-account">
      <div className="user-settings-account__group">
        <h2 className="user-settings-account__label">Почта</h2>
        <UserSettingsAccountEmail email={accountInfo.email} />
      </div>
      <div className="user-settings-account__group">
        <h2 className="user-settings-account__label">Пароль</h2>
        <UserSettingsPasswordForm userUrl={userUrl || ''} />
      </div>
    </div>
  ) : (
    <div className="user-settings-account__loader">
      <PageLoader />
    </div>
  );
};

export default UserSettingsAccount;
