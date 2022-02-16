import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../../routes/route-names.enum';
import './club-header-master.scss';

interface ClubHeaderMasterProps {
  master: {
    username: string;
    url: string;
  } | null;
}

const ClubHeaderMaster: FC<ClubHeaderMasterProps> = ({ master, ...rest }) => {
  return (
    <div className="club-header-master">
      <div className="club-header-master__title">Управляющий</div>
      {master ? (
        <Link className="club-header-master__name" to={`${RouteNames.USER_PROFILE_BASE}${master.url}`}>{master.username}</Link>
      ) : (
        <div className="club-header-master__name">Отсутствует</div>
      )}
    </div>
  );
};

export default ClubHeaderMaster;