import { useEffect, useState } from 'react';
import { UserAccountInfo } from '../../../models/user-account-info';
import { useRequestPage } from '../../../hooks/useRequestPage';
import UserService from '../../../services/user.service';

const useUserSettingsAccount = (userUrl: string) => {
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

  return {accountInfo, isLoaded};
}

export default useUserSettingsAccount;