import React, { FC } from 'react';
import TabButton, {TabButtonProps} from '../../UI/TabButton/TabButton';

interface ProfileTabsProps {
  tabsData: TabButtonProps[]
}

const ProfileTabs: FC<ProfileTabsProps> = (props) => {
  const {tabsData, ...rest} = props;
  return (
    <div>
      {tabsData.map(tab =>
        <TabButton name={tab.name} path={tab.path} counter={tab.counter}/>
      )}
    </div>
  );
};

export default ProfileTabs;