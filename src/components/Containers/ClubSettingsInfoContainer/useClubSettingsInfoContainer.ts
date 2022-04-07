import { useAppSelector } from '../../../hooks/useAppSelector';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { useEffect } from 'react';
import { loadClubSettingsInfo } from '../../../store/reducers/club-settings/info';

export const useClubSettingsInfoContainer = (clubUrl: string) => {
  const dispatch = useAppDispatch();
  const { data: clubSettingsInfo, isLoading } = useAppSelector(state => state.clubSettings.info);

  useEffect(() => {
    dispatch(loadClubSettingsInfo(clubUrl));
  },[])

  return { clubSettingsInfo, isLoading };
};
