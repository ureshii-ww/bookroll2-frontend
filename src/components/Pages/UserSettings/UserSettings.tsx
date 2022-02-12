import React, { useState } from 'react';
import UserSettingsInfo from '../../Containers/UserSettingsInfo/UserSettingsInfo';
import UserSettingsAccount from '../../Containers/UserSettingsAccount/UserSettingsAccount';
import SettingsTabButton, { SettingsTabButtonProps } from '../../UI/SettingsTabButton/SettingsTabButton';

export type SettingsTabsType = 'info' | 'account';

enum SettingsTabs {
  INFO = 'info',
  ACCOUNT = 'account',
}

const UserSettings = () => {
  const [currentTab, setCurrentTab] = useState<SettingsTabsType>(SettingsTabs.INFO);
  const settingsTabs: SettingsTabButtonProps[] = [
    { name: 'Информация', onClick: () => setCurrentTab(SettingsTabs.INFO) },
    { name: 'Аккаунт', onClick: () => setCurrentTab(SettingsTabs.ACCOUNT) },
  ];

  return (
    <div>
      <div>
        {settingsTabs.map(tab => (
          <SettingsTabButton name={tab.name} onClick={tab.onClick} />
        ))}
      </div>
      {currentTab === 'info' && <UserSettingsInfo />}
      {currentTab === 'account' && <UserSettingsAccount />}
    </div>
  );
};

export default UserSettings;
