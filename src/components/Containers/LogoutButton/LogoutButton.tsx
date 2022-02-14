import React from 'react';
import TransparentButton from '../../UI/TransparentButton/TransparentButton';
import { useActions } from '../../../hooks/useActions';
import { ReactComponent as LogoutSvg } from '../../../assets/svg/navbar-logout.svg';

const LogoutButton = () => {
  const { logout } = useActions();

  return (
    <TransparentButton onClick={() => logout()}>
      <LogoutSvg />
    </TransparentButton>
  );
};

export default LogoutButton;