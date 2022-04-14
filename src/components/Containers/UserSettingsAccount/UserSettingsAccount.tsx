import React, { FC } from 'react';
import UserSettingsAccountEmail from './UserSettingsAccountEmail/UserSettingsAccountEmail';
import UserSettingsPasswordForm from './UserSettingsAccountPasswordForm/UserSettingsPasswordForm';
import './user-settings-account.scss';
import useUserSettingsAccount from './useUserSettingsAccount';

interface UserAccountProps {
  userUrl: string;
}

const UserSettingsAccount: FC<UserAccountProps> = ({ userUrl, ...rest }) => {
  const { accountInfo } = useUserSettingsAccount(userUrl);

  return (
    <div className="user-settings-account">
      <div className="user-settings-account__group">
        <h2 className="user-settings-account__label">Почта</h2>
        <UserSettingsAccountEmail key={`${accountInfo?.email}-email`} email={accountInfo?.email || ''} />
      </div>
      <div className="user-settings-account__group">
        <h2 className="user-settings-account__label">Пароль</h2>
        <UserSettingsPasswordForm key={`${accountInfo?.email}-password`} userUrl={userUrl || ''} />
      </div>
    </div>
  );
};

export default UserSettingsAccount;
