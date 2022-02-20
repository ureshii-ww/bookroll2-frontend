import { useEffect, useState } from 'react';
import { useClubProfileContext } from '../../Pages/ClubProfilePage/ClubProfilePage';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useRequestTab } from '../../../hooks/useRequestTab';
import ClubService from '../../../services/club.service';

const useClubProfileRules = () => {
  const [clubRules, setClubRules] = useState<string>('');
  const { clubUrl } = useClubProfileContext();
  const isLoading = useAppSelector(state => state.event.isLoadingTab);

  const fetchClubRules = useRequestTab(async clubUrl => {
    const response = await ClubService.getClubRules(clubUrl);
    setClubRules(response.data);
  });

  useEffect(() => {
    fetchClubRules(clubUrl);
  }, [clubUrl]);

  return { clubRules, isLoading };
}

export default useClubProfileRules;