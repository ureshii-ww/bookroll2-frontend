import { useEffect, useState } from 'react';
import { UserProfileInfo } from '../../../models/user-profile-info';
import UserService from '../../../services/user.service';
import useRequest from '../../../hooks/useRequest';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { loadUserSettingsInfo } from '../../../store/reducers/user-settings/info';

const useUserSettingsInfo = (userUrl: string) => {
  const dispatch = useAppDispatch();
  const { data: userInfo, isLoading } = useAppSelector(state => state.userSettings.info);

  useEffect(() => {
    dispatch(loadUserSettingsInfo(userUrl));
  }, []);

  return { userInfo, isLoading };
};

export default useUserSettingsInfo;
