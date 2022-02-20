import React, { Fragment, useEffect } from 'react';
import UserProfileHeader from '../../Containers/UserProfileHeader/UserProfileHeader';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useLocation, useParams, Outlet, Navigate, useOutletContext } from 'react-router-dom';
import ProfileTabs from '../../UI/ProfileTabs/ProfileTabs';
import { TabButtonProps } from '../../UI/TabButton/TabButton';
import { RouteNames } from '../../../routes/route-names.enum';

const UserProfilePage = () => {
  const location = useLocation();
  const { userUrl } = useParams();
  const isCurrentUser = useAppSelector(state => state.auth.userData?.url === userUrl);

  const userProfileTabs: TabButtonProps[] = [
    { name: 'Книги', path: `${RouteNames.USER_PROFILE_BASE}${userUrl}/${RouteNames.USER_PROFILE_BOOKS}` },
    { name: 'Рецензии', path: `${RouteNames.USER_PROFILE_BASE}${userUrl}/${RouteNames.USER_PROFILE_REVIEWS}` },
  ];

  return userProfileTabs.map(tab => tab.path).some(path => path === location.pathname) ? (
    <div>
      <UserProfileHeader isCurrentUser={isCurrentUser} userUrl={userUrl || ''} />
      <ProfileTabs tabsData={userProfileTabs} url={userUrl} />
      <Outlet context={{ isCurrentUser: isCurrentUser, userUrl: userUrl }} />
    </div>
  ) : (
    <Navigate to={`${RouteNames.USER_PROFILE_BASE}${userUrl}/${RouteNames.USER_PROFILE_BOOKS}`} replace={true} />
  );
};

export default UserProfilePage;

type ContextType = { isCurrentUser: boolean; userUrl: string };

export function useUserProfileContext() {
  return useOutletContext<ContextType>();
}
