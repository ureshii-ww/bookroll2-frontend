import { useEffect, useState } from 'react';
import { useClubProfileContext } from '../../Pages/ClubProfilePage/ClubProfilePage';
import { useRequestTab } from '../../../hooks/useRequestTab';
import ClubService from '../../../services/club.service';

const useClubProfileRules = () => {
  const [clubRules, setClubRules] = useState<string>('');
  const { clubUrl } = useClubProfileContext();
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchClubRules = useRequestTab(async clubUrl => {
    const response = await ClubService.getClubRules(clubUrl);
    setClubRules(response.data);
    setIsLoaded(true);
  });

  useEffect(() => {
    fetchClubRules(clubUrl);
  }, [clubUrl]);

  return { clubRules, isLoaded };
};

export default useClubProfileRules;