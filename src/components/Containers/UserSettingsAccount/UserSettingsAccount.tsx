import React, { FC, useEffect, useState } from 'react';
import UserSettingsAccountEmail from './UserSettingsAccountEmail/UserSettingsAccountEmail';
import { useRequestPage } from '../../../hooks/useRequestPage';
import { UserAccountInfo } from '../../../models/user-account-info';
import UserService from '../../../services/user.service';
import UserSettingsPasswordForm from './UserSettingsAccountPasswordForm/UserSettingsPasswordForm';
import './user-settings-account.scss';

interface UserAccountProps {
  userUrl: string;
}

const UserSettingsAccount: FC<UserAccountProps> = ({ userUrl, ...rest }) => {
  const [accountInfo, setAccountInfo] = useState<UserAccountInfo>({ email: '' });
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const fetchAccountData = useRequestPage(async (userUrl: string) => {
    const response = await UserService.getAccountInfo(userUrl);
    setAccountInfo(response.data);
    setIsLoaded(true);
  });

  useEffect(() => {
    fetchAccountData(userUrl);
  }, []);

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
    <div>Loading</div>
  );
};

export default UserSettingsAccount;
