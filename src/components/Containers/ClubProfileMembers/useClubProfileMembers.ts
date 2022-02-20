import { useEffect, useState } from 'react';
import { BasicUserInfo } from '../../../models/basic-user-info';
import { useClubProfileContext } from '../../Pages/ClubProfilePage/ClubProfilePage';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useRequestTab } from '../../../hooks/useRequestTab';
import ClubService from '../../../services/club.service';

const useClubProfileMembers = () => {
  const [usersInfo, setUsersInfo] = useState<BasicUserInfo[]>([]);
  const { isMaster, clubUrl } = useClubProfileContext();
  const isLoading = useAppSelector(state => state.event.isLoadingTab);

  const fetchMembers = useRequestTab(async clubUrl => {
    const response = await ClubService.getClubMembers(clubUrl);
    setUsersInfo(response.data);
  });

  useEffect(() => {
    fetchMembers(clubUrl);
  }, [clubUrl]);

  return { usersInfo, isLoading, clubUrl };
};

export default useClubProfileMembers;