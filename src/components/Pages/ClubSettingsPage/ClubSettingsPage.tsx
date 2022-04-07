import React from 'react';
import { useLocation } from 'react-router-dom';
import './club-settings-page.scss';
import ClubSettingsInfoContainer from '../../Containers/ClubSettingsInfoContainer/ClubSettingsInfoContainer';

const ClubSettingsPage = () => {
  const path = useLocation().pathname;
  const clubUrl = path.substring(path.lastIndexOf('/') - 12, path.lastIndexOf('/'));

  return (
    <div className="club-settings-page">
      <div className="club-settings-page__title">
        <h1>Настройки</h1>
      </div>
      <div className="club-settings-page__container">
        <ClubSettingsInfoContainer clubUrl={clubUrl || ''} />
      </div>
    </div>
  );
};

export default ClubSettingsPage;
