import React, { useState } from 'react';
import UserProfileHeader from '../../Containers/UserProfileHeader/UserProfileHeader';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useLocation, Outlet, Navigate, useOutletContext } from 'react-router-dom';
import ProfileTabs from '../../UI/ProfileTabs/ProfileTabs';
import { TabButtonProps } from '../../UI/ProfileTabs/TabButton/TabButton';
import { RouteNames } from '../../../routes/route-names.enum';
import './user-profile-page.scss';
import PageLoader from '../../UI/PageLoader/PageLoader';
import useUserProfilePage from './useUserProfilePage';

const UserProfilePage = () => {
  const location = useLocation();
  const { userUrl, isLoading, isCurrentUser } = useUserProfilePage();

  const userProfileTabs: TabButtonProps[] = [
    { name: 'Книги', path: `${RouteNames.USER_PROFILE_BASE}${userUrl}/${RouteNames.USER_PROFILE_BOOKS}` },
    { name: 'Рецензии', path: `${RouteNames.USER_PROFILE_BASE}${userUrl}/${RouteNames.USER_PROFILE_REVIEWS}` },
  ];

  if (!userProfileTabs.map(tab => tab.path).some(path => path === location.pathname)) {
    return (
      <Navigate to={`${RouteNames.USER_PROFILE_BASE}${userUrl}/${RouteNames.USER_PROFILE_BOOKS}`} replace={true} />
    );
  }

  return isLoading ? (
    <div className="user-profile-page user-profile-page--loading">
      <PageLoader />
    </div>
  ) : (
    <div className="user-profile-page">
      <UserProfileHeader isCurrentUser={isCurrentUser} />
      <ProfileTabs tabsData={userProfileTabs} url={userUrl} />
      <section className="user-profile-page__content">
        <Outlet context={{ isCurrentUser: isCurrentUser, userUrl: userUrl }} />
      </section>
    </div>
  );
};

export default UserProfilePage;

type ContextType = { isCurrentUser: boolean; userUrl: string };

export function useUserProfileContext() {
  return useOutletContext<ContextType>();
}
