import React, { FC, Fragment } from 'react';
import ClubProfileHeaderButtons from './ClubProfileHeaderButtons/ClubProfileHeaderButtons';
import ProfileTitle from '../../UI/ProfileTitle/ProfileTitle';
import ClubHeaderBook from './ClubHeaderBook/ClubHeaderBook';
import ClubHeaderMaster from './ClubHeaderMaster/ClubHeaderMaster';
import './club-profile-header.scss';
import ClubHeaderMeeting from './ClubHeaderMeeting/ClubHeaderMeeting';
import { Helmet } from 'react-helmet';
import { useAppSelector } from '../../../hooks/useAppSelector';

export interface ClubProfileHeaderProps {
  clubUrl: string;
}

const ClubProfileHeader: FC<ClubProfileHeaderProps> = ({ clubUrl }) => {
  const clubInfo = useAppSelector(state => state.clubProfile.info.data);

  return (
    <Fragment>
      <Helmet>
        <title>Клуб {clubInfo?.clubname || ''}</title>
      </Helmet>
      <section className="club-profile-header">
        <ProfileTitle title={clubInfo?.clubname || ''} />
        <ClubProfileHeaderButtons
          clubUrl={clubUrl || ''}
          isInClub={clubInfo?.isInClub || false}
          isMaster={clubInfo?.isMaster || false}
        />
        <ClubHeaderBook book={clubInfo?.bookToRead || null} />
        <ClubHeaderMaster master={clubInfo?.master || null} />
        <ClubHeaderMeeting meetingNumber={clubInfo?.meetingNumber || 0} />
      </section>
    </Fragment>
  );
};

export default ClubProfileHeader;
