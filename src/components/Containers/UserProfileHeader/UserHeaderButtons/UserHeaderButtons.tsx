import React, { FC } from 'react';
import './user-header-buttons.scss';
import { ReactComponent as SettingsSvg } from '../../../../assets/svg/settings.svg';
import TransparentButton from '../../../UI/TransparentButton/TransparentButton';
import UserSettings from '../../../Pages/UserSettings/UserSettings';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import { openModal } from '../../../../store/reducers/modal';

interface UserHeaderButtonsProps {
  isCurrentUser: boolean;
}

const UserHeaderButtons: FC<UserHeaderButtonsProps> = ({ isCurrentUser, ...rest }) => {
  const dispatch = useAppDispatch();
  const showSettings = () => {
    dispatch(openModal(<UserSettings/>))
  }

  return (
    <div className="user-header-buttons">
      {isCurrentUser && (
        <TransparentButton className="user-header-buttons__button transparent-button--dim" onClick={showSettings}>
          <SettingsSvg />
          <span>Настройки</span>
        </TransparentButton>
      )}
    </div>
  );
};

export default UserHeaderButtons;
