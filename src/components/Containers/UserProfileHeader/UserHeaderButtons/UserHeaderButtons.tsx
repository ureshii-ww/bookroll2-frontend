import React, { FC } from 'react';
import './user-header-buttons.scss';
import { ReactComponent as SettingsSvg } from '../../../../assets/svg/settings.svg';
import TransparentButton from '../../../UI/TransparentButton/TransparentButton';
import { useActions } from '../../../../hooks/useActions';
import UserSettings from '../../../Pages/UserSettings/UserSettings';

interface UserHeaderButtonsProps {
  isCurrentUser: boolean;
}

const UserHeaderButtons: FC<UserHeaderButtonsProps> = ({ isCurrentUser, ...rest }) => {
  const {showModal} = useActions();
  const showSettings = () => {
    showModal(<UserSettings/>)
  }

  return (
    <div className="user-header-buttons">
      {isCurrentUser && (
        <TransparentButton className="user-header-buttons__button transparent-button--dim" onClick={showSettings}>
          <SettingsSvg />
          Настройки
        </TransparentButton>
      )}
    </div>
  );
};

export default UserHeaderButtons;
