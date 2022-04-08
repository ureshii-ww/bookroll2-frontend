import { useEffect } from 'react';
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
