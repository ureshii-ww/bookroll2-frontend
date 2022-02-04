import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ClubProfileInfo } from '../../../models/club-profile-info';
import { useRequest } from '../../../hooks/useRequest';
import ClubService from '../../../services/club.service';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RouteNames } from '../../../routes/route-names.enum';
import TransparentButton from '../../UI/TransparentButton/TransparentButton';
import { useActions } from '../../../hooks/useActions';

interface ClubProfileHeaderProps {
  clubUrl: string | undefined;
  setIsMaster: (arg0: boolean) => (void);
}

const ClubProfileHeader: FC<ClubProfileHeaderProps> = ({ clubUrl, setIsMaster, ...rest }) => {
  const location = useLocation();
  const { isLoading } = useAppSelector(state => state.event)
  const { userData } = useAppSelector(state => state.auth)
  const { setUserData } = useActions();
  const [clubInfo, setClubInfo] = useState<ClubProfileInfo>({
    clubname: null,
    master: null,
    bookToRead: null,
    isMaster: false,
    isInClub: false
  })

  const [fetchInfo, error] = useRequest(async (clubUrl: string) => {
    const response = await ClubService.getClubProfileInfo(clubUrl);
    setClubInfo(response.data);
  })

  useEffect(() => {
    fetchInfo(clubUrl)
  }, [userData])

  useEffect(() => {
    setIsMaster(clubInfo.isMaster)
  }, [clubInfo])

  const [leaveClub, leaveError] = useRequest(async (clubUrl: string) => {
    const response = await ClubService.leaveClub(clubUrl);
    localStorage.setItem('userData', JSON.stringify(response.data));
    setUserData(response.data);
  })

  const [joinClub, joinError] = useRequest(async (clubUrl: string) => {
    const response = await ClubService.joinClub(clubUrl);
    localStorage.setItem('userData', JSON.stringify(response.data));
    setUserData(response.data);
  })

  return (
    !isLoading ?
      <div>
        <div>
          <h1>{clubInfo.clubname}</h1>
        </div>
        <div>
          {clubInfo.isMaster && <div>Wheel</div>}
          {clubInfo.isMaster && <div>Settings</div>}
          {!clubInfo.isInClub && <TransparentButton onClick={() => joinClub(clubUrl)}>Вступить в клуб</TransparentButton>}
          {clubInfo.isInClub && <TransparentButton onClick={() => leaveClub(clubUrl)}>Выйти из клуба</TransparentButton>}
        </div>
        <div>
          <div>Книга</div>
          <div>{clubInfo.bookToRead?.title}</div>
          <div>{clubInfo.bookToRead?.authors.join(', ')}</div>
        </div>
        <div>
          <div>Управляющий</div>
          <Link to={`${RouteNames.USER_PROFILE_BASE}${clubInfo.master?.url}`}>{clubInfo.master?.username}</Link>
        </div>
      </div> :
      <div>
        Loading
      </div>
  );
};

export default ClubProfileHeader;