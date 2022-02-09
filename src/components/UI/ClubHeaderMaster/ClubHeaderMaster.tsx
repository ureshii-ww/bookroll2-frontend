import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../routes/route-names.enum';

interface ClubHeaderMasterProps {
  master: {
    username: string,
    url: string
  } | null
}

const ClubHeaderMaster: FC<ClubHeaderMasterProps> = ({ master, ...rest }) => {
  return (
    <div>
      <div>Управляющий</div>
      {master
        ?
        <Link to={`${RouteNames.USER_PROFILE_BASE}${master.url}`}>{master.username}</Link>
        :
        <div>Отсутствует</div>}
    </div>
  );
};

export default ClubHeaderMaster;