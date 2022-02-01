import React, { useEffect, useState } from 'react';
import ClubProfileHeader from '../../Containers/ClubProfileHeader/ClubProfileHeader';
import { useParams } from 'react-router-dom';
import ProfileTabs from '../../Containers/ProfileTabs/ProfileTabs';
import { TabButtonProps } from '../../UI/TabButton/TabButton';
import { RouteNames } from '../../../routes/route-names.enum';

const ClubProfilePage = () => {
  const { clubUrl } = useParams();
  const [isMaster, setIsMaster] = useState(false)

  const clubProfileTabs: TabButtonProps[] = [
    { name: 'Правила', path: `${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/${RouteNames.CLUB_PROFILE_RULES}` },
    { name: 'Участники', path: `${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/${RouteNames.CLUB_PROFILE_MEMBERS}` },
    { name: 'Книги', path: `${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/${RouteNames.CLUB_PROFILE_BOOKS}` },
    { name: 'Рецензии', path: `${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/${RouteNames.CLUB_PROFILE_REVIEWS}` },
    { name: 'История', path: `${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/${RouteNames.CLUB_PROFILE_HISTORY}` },
  ]

  return (
    <div>
      <ClubProfileHeader clubUrl={clubUrl} setIsMaster={(value) => setIsMaster(value)}/>
      <ProfileTabs tabsData={clubProfileTabs} url={clubUrl}/>
    </div>
  );
};

export default ClubProfilePage;