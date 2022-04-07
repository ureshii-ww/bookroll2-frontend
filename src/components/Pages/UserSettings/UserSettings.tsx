import React from 'react';
import UserSettingsInfo from '../../Containers/UserSettingsInfo/UserSettingsInfo';
import UserSettingsAccount from '../../Containers/UserSettingsAccount/UserSettingsAccount';
import SettingsTabButton from '../../UI/SettingsTabButton/SettingsTabButton';
import './user-settings.scss';
import { useUserSettings } from './useUserSettings';

const UserSettings = () => {
  const { userUrl, settingsTabs, currentTab } = useUserSettings();

  return (
    <div className="user-settings">
      <div className="user-settings__content">
        <div className="user-settings__title">
          <h1>Настройки</h1>
        </div>
        <nav className="user-settings__tabs">
          {settingsTabs.map(tab => (
            <SettingsTabButton key={`user-settings-${tab.name}`} {...tab} />
          ))}
        </nav>
        <div className="user-settings__container">
          {currentTab === 'info' && <UserSettingsInfo userUrl={userUrl} />}
          {currentTab === 'account' && <UserSettingsAccount userUrl={userUrl} />}
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
