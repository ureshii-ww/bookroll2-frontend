import React, { FC } from 'react';
import TransparentButton from '../../../UI/TransparentButton/TransparentButton';
import { useActions } from '../../../../hooks/useActions';
import { ReactComponent as LogoutSvg } from '../../../../assets/svg/navbar-logout.svg';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import { logout } from '../../../../store/reducers/auth';

const LogoutButton:FC = ({children}) => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <TransparentButton className="transparent-button--main navbar__button navbar__logout" onClick={handleLogout}>
      <LogoutSvg />
      <span>{children}</span>
    </TransparentButton>
  );
};

export default LogoutButton;