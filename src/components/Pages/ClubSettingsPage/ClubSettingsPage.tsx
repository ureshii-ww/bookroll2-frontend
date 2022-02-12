import React, { useEffect, useState } from 'react';
import ClubSettingsForm from '../../Containers/ClubSettingsForm/ClubSettingsForm';
import { ClubSettingsInfo } from '../../../models/club-settings-info';
import { useRequestPage } from '../../../hooks/useRequestPage';
import { useParams } from 'react-router-dom';
import ClubService from '../../../services/club.service';

const ClubSettingsPage = () => {
  const { clubUrl } = useParams();
  const [clubInfo, setClubInfo] = useState<ClubSettingsInfo>({
    clubname: '',
    description: '',
    members: [],
  });
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const getClubSettingsInfo = useRequestPage(async (clubUrl: string) => {
    const response = await ClubService.getSettingsInfo(clubUrl);
    setClubInfo(response.data);
    setIsLoaded(true);
  });

  useEffect(() => {
    getClubSettingsInfo(clubUrl);
  }, []);

  return isLoaded ? (
    <div>
      <ClubSettingsForm clubSettingsInfo={clubInfo} clubUrl={clubUrl || ''} />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default ClubSettingsPage;
