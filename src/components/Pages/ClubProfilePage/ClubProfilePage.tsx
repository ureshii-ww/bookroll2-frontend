import React from 'react';
import ClubProfileHeader from '../../Containers/ClubProfileHeader/ClubProfileHeader';
import { Outlet, useLocation, Navigate, useOutletContext } from 'react-router-dom';
import ProfileTabs from '../../UI/ProfileTabs/ProfileTabs';
import { TabButtonProps } from '../../UI/ProfileTabs/TabButton/TabButton';
import { RouteNames } from '../../../routes/route-names.enum';
import './club-profile-page.scss';
import PageLoader from '../../UI/PageLoader/PageLoader';
import useClubProfilePage from './useClubProfilePage';

type ContextType = { clubUrl: string };

const ClubProfilePage = () => {
  const location = useLocation();
  const { clubUrl, isLoading } = useClubProfilePage();

  const clubProfileTabs: TabButtonProps[] = [
    { name: 'Описание', path: `${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/${RouteNames.CLUB_PROFILE_RULES}` },
    { name: 'Участники', path: `${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/${RouteNames.CLUB_PROFILE_MEMBERS}` },
    { name: 'Книги', path: `${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/${RouteNames.CLUB_PROFILE_BOOKS}` },
    { name: 'Рецензии', path: `${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/${RouteNames.CLUB_PROFILE_REVIEWS}` },
    { name: 'История', path: `${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/${RouteNames.CLUB_PROFILE_HISTORY}` },
  ];

  if (!clubProfileTabs.map(tab => tab.path).some(path => path === location.pathname)) {
    return (
      <Navigate to={`${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/${RouteNames.CLUB_PROFILE_BOOKS}`} replace={true} />
    );
  }

  return isLoading ? (
    <div className="club-profile-page club-profile-page--loading">
      <PageLoader />
    </div>
  ) : (
    <div className="club-profile-page">
      <ClubProfileHeader clubUrl={clubUrl || ''} />
      <ProfileTabs tabsData={clubProfileTabs} url={clubUrl} />
      <section className="club-profile-page__content">
        <Outlet context={{ clubUrl }} />
      </section>
    </div>
  );
};

export default ClubProfilePage;

export function useClubProfileContext() {
  return useOutletContext<ContextType>();
}
