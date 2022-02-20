import React, { FC } from 'react';
import TabButton, { TabButtonProps } from '../TabButton/TabButton';
import './profile-tabs.scss';

interface ProfileTabsProps {
  url: string | undefined;
  tabsData: TabButtonProps[];
}

const ProfileTabs: FC<ProfileTabsProps> = props => {
  const { tabsData } = props;
  return (
    <div className="profile-tabs">
      {tabsData.map(tab => (
        <TabButton name={tab.name} path={tab.path} counter={tab.counter} key={`${props.url}-${tab.path}`} />
      ))}
    </div>
  );
};

export default ProfileTabs;