import React, { FC } from 'react';
import './club-header-meting.scss';

interface ClubHeaderMeetingProps {
  meetingNumber: number;
}

const ClubHeaderMeeting: FC<ClubHeaderMeetingProps> = ({ meetingNumber, ...rest }) => {
  return (
    <div className="club-header-meeting">
      <span className="club-header-meeting__title">Собрание </span>
      <span className="club-header-meeting__number">{meetingNumber}</span>
    </div>
  );
};

export default ClubHeaderMeeting;
