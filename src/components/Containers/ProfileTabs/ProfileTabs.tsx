import React, { FC } from 'react';
import TabButton, {TabButtonProps} from '../../UI/TabButton/TabButton';
import { useParams } from 'react-router-dom';

interface ProfileTabsProps {
  tabsData: TabButtonProps[]
}

const ProfileTabs: FC<ProfileTabsProps> = (props) => {
  const {userUrl} = useParams();
  const {tabsData, ...rest} = props;
  return (
    <div>
      {tabsData.map(tab =>
        <TabButton name={tab.name} path={tab.path} counter={tab.counter} key={`${userUrl}-${tab.path}`}/>
      )}
    </div>
  );
};

export default ProfileTabs;