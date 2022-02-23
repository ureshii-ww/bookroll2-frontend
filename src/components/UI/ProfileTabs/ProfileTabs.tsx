import React, { FC, useEffect, useState } from 'react';
import TabButton, { TabButtonProps } from '../TabButton/TabButton';
import './profile-tabs.scss';
import { useAppSelector } from '../../../hooks/useAppSelector';
import useProfileTabs from './useProfileTabs';

interface ProfileTabsProps {
  url: string | undefined;
  tabsData: TabButtonProps[];
  className?: string;
}

const ProfileTabs: FC<ProfileTabsProps> = props => {
  const { tabsData } = props;
  const classString = useProfileTabs();

  return (
    <div className={classString}>
      {tabsData.map(tab => (
        <TabButton name={tab.name} path={tab.path} counter={tab.counter} key={`${props.url}-${tab.path}`} />
      ))}
    </div>
  );
};

export default ProfileTabs;
