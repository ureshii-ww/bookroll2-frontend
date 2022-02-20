import React, { useEffect, useState } from 'react';
import ClubProfileHeader from '../../Containers/ClubProfileHeader/ClubProfileHeader';
import { useParams, Outlet, useLocation, Navigate, useOutletContext } from 'react-router-dom';
import ProfileTabs from '../../UI/ProfileTabs/ProfileTabs';
import { TabButtonProps } from '../../UI/TabButton/TabButton';
import { RouteNames } from '../../../routes/route-names.enum';
import './club-profile-page.scss';

type ContextType = { isMaster: boolean; clubUrl: string };

const ClubProfilePage = () => {
  const location = useLocation();
  const { clubUrl } = useParams();
  const [isMaster, setIsMaster] = useState(false);
  const [paramClubUrl, setParamClubUrl] = useState<string>();

  useEffect(() => {
    setParamClubUrl(clubUrl);
  }, [clubUrl]);

  const clubProfileTabs: TabButtonProps[] = [
    { name: 'Описание', path: `${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/${RouteNames.CLUB_PROFILE_RULES}` },
    { name: 'Участники', path: `${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/${RouteNames.CLUB_PROFILE_MEMBERS}` },
    { name: 'Книги', path: `${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/${RouteNames.CLUB_PROFILE_BOOKS}` },
    { name: 'Рецензии', path: `${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/${RouteNames.CLUB_PROFILE_REVIEWS}` },
    { name: 'История', path: `${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/${RouteNames.CLUB_PROFILE_HISTORY}` },
  ];

  return clubProfileTabs.map(tab => tab.path).some(path => path === location.pathname) ? (
    <div className="club-profile-page">
      <ClubProfileHeader clubUrl={clubUrl} setIsMaster={value => setIsMaster(value)} />
      <ProfileTabs tabsData={clubProfileTabs} url={clubUrl} />
      <div className="club-profile-page__content">
        <Outlet context={{ isMaster, clubUrl }} />
      </div>
    </div>
  ) : (
    <Navigate to={`${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/${RouteNames.CLUB_PROFILE_BOOKS}`} replace={true} />
  );
};

export default ClubProfilePage;

export function useClubProfileContext() {
  return useOutletContext<ContextType>();
}