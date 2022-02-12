import React, { FC } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import './user-header-buttons.scss';
import { RouteNames } from '../../../routes/route-names.enum';

interface UserHeaderButtonsProps {
  isCurrentUser: boolean;
}

const UserHeaderButtons: FC<UserHeaderButtonsProps> = ({ isCurrentUser, ...rest }) => {
  const { userUrl } = useParams();

  return (
    <div className="user-header-buttons">
      {isCurrentUser && <Link to={`${RouteNames.USER_PROFILE_BASE}${userUrl}/settings`}>Настройки</Link>}
    </div>
  );
};

export default UserHeaderButtons;