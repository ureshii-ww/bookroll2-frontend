import React, { useEffect, useState } from 'react';
import UserSettingsAccountEmail from '../UserSettingsAccountEmail/UserSettingsAccountEmail';
import { useRequestPage } from '../../../hooks/useRequestPage';
import { UserAccountInfo } from '../../../models/user-account-info';
import UserService from '../../../services/user.service';
import { useParams } from 'react-router-dom';
import UserSettingsPasswordForm from '../UserSettingsAccountPasswordForm/UserSettingsPasswordForm';

const UserSettingsAccount = () => {
  const {userUrl} = useParams()
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
    <div>
      <UserSettingsAccountEmail email={accountInfo.email} />
      <UserSettingsPasswordForm userUrl={userUrl || ''}/>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default UserSettingsAccount;
