import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface UserHeaderButtonsProps {
  isCurrentUser: boolean;
}

const UserHeaderButtons: FC<UserHeaderButtonsProps> = ({isCurrentUser, ...rest}) => {
  const location = useLocation();

  return (
    <div>
      {isCurrentUser && <Link to={`${location.pathname}/settings`}>Настройки</Link>}
    </div>
  );
};

export default UserHeaderButtons;