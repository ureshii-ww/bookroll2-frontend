import React, { FC } from 'react';
import TabButton, { TabButtonProps } from './TabButton/TabButton';
import './profile-tabs.scss';
import { useAppSelector } from '../../../hooks/useAppSelector';
import Scrollbars from 'react-custom-scrollbars-2';

interface ProfileTabsProps {
  url: string | undefined;
  tabsData: TabButtonProps[];
  className?: string;
}

const ProfileTabs: FC<ProfileTabsProps> = props => {
  const { tabsData } = props;
  const isTabLoading = useAppSelector(state => state.loadingTab.isLoadingTab);
  const classString = isTabLoading ? 'profile-tabs profile-tabs--loading' : 'profile-tabs profile-tabs--loaded';

  return (
    <nav className={classString}>
      <div className="profile-tabs__wrapper">
        {tabsData.map(tab => (
          <TabButton name={tab.name} path={tab.path} counter={tab.counter} key={`${props.url}-${tab.path}`} />
        ))}
      </div>
    </nav>
  );
};

export default ProfileTabs;
