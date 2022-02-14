import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import './user-header-buttons.scss';
import { RouteNames } from '../../../routes/route-names.enum';
import { ReactComponent as SettingsSvg } from '../../../assets/svg/settings.svg';

interface UserHeaderButtonsProps {
  isCurrentUser: boolean;
}

const UserHeaderButtons: FC<UserHeaderButtonsProps> = ({ isCurrentUser, ...rest }) => {
  const { userUrl } = useParams();

  return (
    <div className="user-header-buttons">
      {isCurrentUser && (
        <div className="user-header-buttons__button">
          <Link to={`${RouteNames.USER_PROFILE_BASE}${userUrl}/settings`}>
            <SettingsSvg />
            Настройки
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserHeaderButtons;
