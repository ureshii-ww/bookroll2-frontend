import React, { FC } from 'react';
import TabButton, {TabButtonProps} from '../../UI/TabButton/TabButton';
import { useParams } from 'react-router-dom';

interface ProfileTabsProps {
  url: string | undefined,
  tabsData: TabButtonProps[]
}

const ProfileTabs: FC<ProfileTabsProps> = (props) => {
  const {tabsData} = props;
  return (
    <div>
      {tabsData.map(tab =>
        <TabButton name={tab.name} path={tab.path} counter={tab.counter} key={`${props.url}-${tab.path}`}/>
      )}
    </div>
  );
};

export default ProfileTabs;