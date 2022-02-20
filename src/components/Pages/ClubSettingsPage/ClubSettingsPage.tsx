import React, { useEffect, useState } from 'react';
import ClubSettingsForm from '../../Containers/ClubSettingsForm/ClubSettingsForm';
import { ClubSettingsInfo } from '../../../models/club-settings-info';
import { useRequestPage } from '../../../hooks/useRequestPage';
import { useLocation } from 'react-router-dom';
import ClubService from '../../../services/club.service';
import './club-settings-page.scss';

const ClubSettingsPage = () => {
  const path = useLocation().pathname;
  const clubUrl = path.substring(path.lastIndexOf('/') - 12, path.lastIndexOf('/'));
  const [clubInfo, setClubInfo] = useState<ClubSettingsInfo>({
    clubname: '',
    rules: '',
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
    <div className="club-settings-page">
      <div className="club-settings-page__title">
        <h1>Настройки</h1>
      </div>
      <div className="club-settings-page__container">
        <ClubSettingsForm clubSettingsInfo={clubInfo} clubUrl={clubUrl || ''} />
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default ClubSettingsPage;
