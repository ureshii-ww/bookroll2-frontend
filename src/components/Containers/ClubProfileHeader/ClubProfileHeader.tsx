import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ClubProfileInfo } from '../../../models/club-profile-info';
import { useFetch } from '../../../hooks/useFetch';
import ClubService from '../../../services/club.service';

interface ClubProfileHeaderProps {
  isInClub: boolean;
  clubUrl: string | undefined;
}

const ClubProfileHeader: FC<ClubProfileHeaderProps> = ({ isInClub, clubUrl, ...rest }) => {
  const location = useLocation();
  const [clubInfo, setClubInfo] = useState<ClubProfileInfo>({
    clubname: null,
    master: null,
    bookToRead: null
  })

  const [fetchInfo, isLoaded, error] = useFetch(async (clubUrl: string) => {
    const response = await ClubService.getClubProfileInfo(clubUrl);
    setClubInfo(response.data);
  })

  useEffect(() => {
    fetchInfo(clubUrl)
  }, [])

  return (
    <div>

    </div>
  );
};

export default ClubProfileHeader;