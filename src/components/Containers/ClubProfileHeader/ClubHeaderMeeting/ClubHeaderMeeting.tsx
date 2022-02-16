import React, { FC } from 'react';
import './club-header-meting.scss';

interface ClubHeaderMeetingProps {
  meetingNumber: number;
}

const ClubHeaderMeeting: FC<ClubHeaderMeetingProps> = ({ meetingNumber, ...rest }) => {
  return (
    <div className="club-header-meeting">
      <span>{`Собрание ${meetingNumber}`}</span>
    </div>
  );
};

export default ClubHeaderMeeting;
