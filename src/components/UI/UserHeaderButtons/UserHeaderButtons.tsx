import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './user-header-buttons.scss';

interface UserHeaderButtonsProps {
  isCurrentUser: boolean;
}

const UserHeaderButtons: FC<UserHeaderButtonsProps> = ({isCurrentUser, ...rest}) => {
  const location = useLocation();

  return (
    <div className="user-header-buttons">
      {isCurrentUser && <Link to={`${location.pathname}/settings`}>Настройки</Link>}
    </div>
  );
};

export default UserHeaderButtons;