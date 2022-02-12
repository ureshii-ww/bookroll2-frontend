import React, { useState } from 'react';
import UserSettingsInfo from '../../Containers/UserSettingsInfo/UserSettingsInfo';
import UserSettingsAuth from '../../Containers/UserSettingsAuth/UserSettingsAuth';
import SettingsTabButton, { SettingsTabButtonProps } from '../../UI/SettingsTabButton/SettingsTabButton';

export type SettingsTabsType = 'info' | 'auth';

enum SettingsTabs {
  INFO = 'info',
  AUTH = 'auth',
}

const UserSettings = () => {
  const [currentTab, setCurrentTab] = useState<SettingsTabsType>(SettingsTabs.INFO);
  const settingsTabs: SettingsTabButtonProps[] = [
    { name: 'Информация', onClick: () => setCurrentTab(SettingsTabs.INFO) },
    { name: 'Аккаунт', onClick: () => setCurrentTab(SettingsTabs.AUTH) },
  ];

  return (
    <div>
      <div>
        {settingsTabs.map(tab => (
          <SettingsTabButton name={tab.name} onClick={tab.onClick} />
        ))}
      </div>
      {currentTab === 'info' && <UserSettingsInfo />}
      {currentTab === 'auth' && <UserSettingsAuth />}
    </div>
  );
};

export default UserSettings;
