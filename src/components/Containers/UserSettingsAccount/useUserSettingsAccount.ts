import { useEffect, useState } from 'react';
import { UserAccountInfo } from '../../../models/user-account-info';
import UserService from '../../../services/user.service';
import useRequest from '../../../hooks/useRequest';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { loadUserSettingsAccount } from '../../../store/reducers/user-settings/account';

const useUserSettingsAccount = (userUrl: string) => {
  const dispatch = useAppDispatch();
  const { data: accountInfo, isLoading } = useAppSelector(state => state.userSettings.account);

  useEffect(() => {
    dispatch(loadUserSettingsAccount(userUrl));
  }, []);

  return { accountInfo, isLoading };
};

export default useUserSettingsAccount;