import React, { FC } from 'react';
import ClubProfileHeaderButtons from './ClubProfileHeaderButtons/ClubProfileHeaderButtons';
import ProfileTitle from '../../UI/ProfileTitle/ProfileTitle';
import ClubHeaderBook from './ClubHeaderBook/ClubHeaderBook';
import ClubHeaderMaster from './ClubHeaderMaster/ClubHeaderMaster';
import './club-profile-header.scss';
import ClubHeaderMeeting from './ClubHeaderMeeting/ClubHeaderMeeting';
import useClubProfileHeader from './useClubProfileHeader';

export interface ClubProfileHeaderProps {
  clubUrl: string | undefined;
  setIsMaster: (arg0: boolean) => void;
}

const ClubProfileHeader: FC<ClubProfileHeaderProps> = ({ clubUrl, setIsMaster, ...rest }) => {
  const { clubInfo, isLoading } = useClubProfileHeader({ clubUrl, setIsMaster });

  return !isLoading ? (
    <div className="club-profile-header">
      <ProfileTitle title={clubInfo.clubname || ''} />
      <ClubProfileHeaderButtons clubUrl={clubUrl || ''} isInClub={clubInfo.isInClub} isMaster={clubInfo.isMaster} />
      <ClubHeaderBook book={clubInfo.bookToRead} />
      <ClubHeaderMaster master={clubInfo.master} />
      <ClubHeaderMeeting meetingNumber={clubInfo.meetingNumber} />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default ClubProfileHeader;
