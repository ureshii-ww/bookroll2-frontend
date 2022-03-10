import { useEffect, useState } from 'react';
import { BasicUserInfo } from '../../../models/basic-user-info';
import { useClubProfileContext } from '../../Pages/ClubProfilePage/ClubProfilePage';
import useRequest from '../../../hooks/useRequest';
import ClubService from '../../../services/club.service';

const useClubProfileMembers = () => {
  const [usersInfo, setUsersInfo] = useState<BasicUserInfo[]>([]);
  const { clubUrl } = useClubProfileContext();
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchMembers = useRequest('Tab', async () => {
    const response = await ClubService.getClubMembers(clubUrl);
    setUsersInfo(response.data);
    setIsLoaded(true);
  });

  useEffect(() => {
    fetchMembers({});
  }, [clubUrl]);

  return { usersInfo, isLoaded, clubUrl };
};

export default useClubProfileMembers;