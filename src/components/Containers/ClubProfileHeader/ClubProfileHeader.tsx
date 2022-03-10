import React, { FC, Fragment } from 'react';
import ClubProfileHeaderButtons from './ClubProfileHeaderButtons/ClubProfileHeaderButtons';
import ProfileTitle from '../../UI/ProfileTitle/ProfileTitle';
import ClubHeaderBook from './ClubHeaderBook/ClubHeaderBook';
import ClubHeaderMaster from './ClubHeaderMaster/ClubHeaderMaster';
import './club-profile-header.scss';
import ClubHeaderMeeting from './ClubHeaderMeeting/ClubHeaderMeeting';
import useClubProfileHeader from './useClubProfileHeader';
import { Helmet } from 'react-helmet';

export interface ClubProfileHeaderProps {
  clubUrl: string | undefined;
  setIsMaster: (arg0: boolean) => void;
  setIsLoaded: () => void;
}

const ClubProfileHeader: FC<ClubProfileHeaderProps> = ({ clubUrl, setIsMaster, setIsLoaded, ...rest }) => {
  const { clubInfo } = useClubProfileHeader({ clubUrl, setIsMaster, setIsLoaded });

  return (
    <Fragment>
      <Helmet>
        <title>Клуб {clubInfo.clubname || ''}</title>
      </Helmet>
      <section className="club-profile-header">
        <ProfileTitle title={clubInfo.clubname || ''} />
        <ClubProfileHeaderButtons clubUrl={clubUrl || ''} isInClub={clubInfo.isInClub} isMaster={clubInfo.isMaster} />
        <ClubHeaderBook book={clubInfo.bookToRead} />
        <ClubHeaderMaster master={clubInfo.master} />
        <ClubHeaderMeeting meetingNumber={clubInfo.meetingNumber} />
      </section>
    </Fragment>
  );
};

export default ClubProfileHeader;
