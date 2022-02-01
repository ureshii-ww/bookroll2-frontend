import React from 'react';
import UserProfileHeader from '../../Containers/UserProfileHeader/UserProfileHeader';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useLocation, useParams } from 'react-router-dom';
import ProfileTabs from '../../Containers/ProfileTabs/ProfileTabs';
import { TabButtonProps } from '../../UI/TabButton/TabButton';
import { RouteNames } from '../../../routes/route-names.enum';

const UserProfilePage = () => {
  const location = useLocation();
  const { userUrl } = useParams();
  const isCurrentUser = useAppSelector(state => state.auth.userData?.url === userUrl)

  const userProfileTabs: TabButtonProps[] = [
    {name: 'Книги', path: `${RouteNames.USER_PROFILE_BASE}${userUrl}/${RouteNames.USER_PROFILE_BOOKS}`},
    {name: 'Рецензии', path: `${RouteNames.USER_PROFILE_BASE}${userUrl}/${RouteNames.USER_PROFILE_REVIEWS}`}
  ]

  return (
    <div>
      <UserProfileHeader isCurrentUser={isCurrentUser} userUrl={userUrl}/>
      <ProfileTabs tabsData={userProfileTabs}/>
    </div>
  );
};

export default UserProfilePage;