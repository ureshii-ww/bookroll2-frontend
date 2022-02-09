import React, { FC, useEffect, useState } from 'react';
import { ClubProfileInfo } from '../../../models/club-profile-info';
import { useRequestPage } from '../../../hooks/useRequestPage';
import ClubService from '../../../services/club.service';
import { useAppSelector } from '../../../hooks/useAppSelector';
import ClubProfileHeaderButtons from '../ClubProfileHeaderButtons/ClubProfileHeaderButtons';
import ProfileTitle from '../../UI/ProfileTitle/ProfileTitle';
import ClubHeaderBook from '../../UI/ClubHeaderBook/ClubHeaderBook';
import ClubHeaderMaster from '../../UI/ClubHeaderMaster/ClubHeaderMaster';

interface ClubProfileHeaderProps {
  clubUrl: string | undefined;
  setIsMaster: (arg0: boolean) => (void);
}

const ClubProfileHeader: FC<ClubProfileHeaderProps> = ({ clubUrl, setIsMaster, ...rest }) => {
  const isLoading = useAppSelector(state => state.event.isLoadingPage)
  const userData = useAppSelector(state => state.auth.userData)
  const [clubInfo, setClubInfo] = useState<ClubProfileInfo>({
    clubname: null,
    master: null,
    bookToRead: null,
    isMaster: false,
    isInClub: false
  })

  const [fetchInfo, error] = useRequestPage(async (clubUrl: string) => {
    const response = await ClubService.getClubProfileInfo(clubUrl);
    setClubInfo(response.data);
    setIsMaster(response.data.isMaster);
  })

  useEffect(() => {
    fetchInfo(clubUrl)
  }, [userData])

  return (
    !isLoading ?
      <div>
        <ProfileTitle title={clubInfo.clubname || ''}/>
        <ClubProfileHeaderButtons clubUrl={clubUrl || ''}
                                  isInClub={clubInfo.isInClub}
                                  isMaster={clubInfo.isMaster} />
        <ClubHeaderBook book={clubInfo.bookToRead}/>
        <ClubHeaderMaster master={clubInfo.master}/>
      </div> :
      <div>
        Loading
      </div>
  );
};

export default ClubProfileHeader;