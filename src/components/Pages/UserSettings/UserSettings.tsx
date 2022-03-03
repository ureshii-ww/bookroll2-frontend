import React, { useState } from 'react';
import UserSettingsInfo from '../../Containers/UserSettingsInfo/UserSettingsInfo';
import UserSettingsAccount from '../../Containers/UserSettingsAccount/UserSettingsAccount';
import SettingsTabButton, { SettingsTabButtonProps } from '../../UI/SettingsTabButton/SettingsTabButton';
import './user-settings.scss';
import { useLocation } from 'react-router-dom';

export enum SettingsTabs {
  INFO = 'info',
  ACCOUNT = 'account',
}

const UserSettings = () => {
  const path = useLocation().pathname;
  const userUrl = path.substring(path.lastIndexOf('/') - 12, path.lastIndexOf('/'));
  const [currentTab, setCurrentTab] = useState<SettingsTabs>(SettingsTabs.INFO);
  const settingsTabs: SettingsTabButtonProps[] = [
    {
      name: 'Информация',
      onClick: () => setCurrentTab(SettingsTabs.INFO),
      className: currentTab === SettingsTabs.INFO ? 'settings-tab-button--active' : '',
    },
    {
      name: 'Аккаунт',
      onClick: () => setCurrentTab(SettingsTabs.ACCOUNT),
      className: currentTab === SettingsTabs.ACCOUNT ? 'settings-tab-button--active' : '',
    },
  ];

  return (
    <div className="user-settings">
      <div className="user-settings__content">
        <div className="user-settings__title">
          <h1>Настройки</h1>
        </div>
        <nav className="user-settings__tabs">
          {settingsTabs.map((tab) => (
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
