import { useAppSelector } from '../../../hooks/useAppSelector';
import { useEffect, useState } from 'react';
import { ClubProfileInfo } from '../../../models/club-profile-info';
import { useRequestPage } from '../../../hooks/useRequestPage';
import ClubService from '../../../services/club.service';
import { ClubProfileHeaderProps } from './ClubProfileHeader';

const useClubProfileHeader = ({ clubUrl, setIsMaster }: ClubProfileHeaderProps) => {
  const isLoading = useAppSelector(state => state.event.isLoadingPage);
  const userData = useAppSelector(state => state.auth.userData);
  const [clubInfo, setClubInfo] = useState<ClubProfileInfo>({
    clubname: null,
    master: null,
    bookToRead: null,
    meetingNumber: 1,
    isMaster: false,
    isInClub: false,
  });

  const fetchInfo = useRequestPage(async (clubUrl: string) => {
    const response = await ClubService.getClubProfileInfo(clubUrl);
    setClubInfo(response.data);
    setIsMaster(response.data.isMaster);
  });

  useEffect(() => {
    fetchInfo(clubUrl);
  }, [userData]);

  return { clubInfo, isLoading };
};

export default useClubProfileHeader;