import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { getSettingsTabs, SettingsTabs } from './settings-tabs';

export const useUserSettings = () => {
  const path = useLocation().pathname;
  const userUrl = path.substring(path.lastIndexOf('/') - 12, path.lastIndexOf('/'));
  const [currentTab, setCurrentTab] = useState<SettingsTabs>(SettingsTabs.INFO);
  const settingsTabs = getSettingsTabs(currentTab, setCurrentTab);

  return { userUrl, currentTab, settingsTabs };
};
