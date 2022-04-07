import { SettingsTabButtonProps } from '../../UI/SettingsTabButton/SettingsTabButton';
import { Dispatch, SetStateAction } from 'react';

export enum SettingsTabs {
  INFO = 'info',
  ACCOUNT = 'account',
}

export function getSettingsTabs(
  currentTab: SettingsTabs,
  setCurrentTab: Dispatch<SetStateAction<SettingsTabs>>
): SettingsTabButtonProps[] {
  return [
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
}

