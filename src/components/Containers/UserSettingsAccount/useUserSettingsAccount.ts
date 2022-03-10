import { useEffect, useState } from 'react';
import { UserAccountInfo } from '../../../models/user-account-info';
import UserService from '../../../services/user.service';
import useRequest from '../../../hooks/useRequest';

const useUserSettingsAccount = (userUrl: string) => {
  const [accountInfo, setAccountInfo] = useState<UserAccountInfo>({ email: '' });
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const fetchAccountData = useRequest('Modal', async (userUrl: string) => {
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