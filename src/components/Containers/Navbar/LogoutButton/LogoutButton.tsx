import React, { FC } from 'react';
import TransparentButton from '../../../UI/TransparentButton/TransparentButton';
import { useActions } from '../../../../hooks/useActions';
import { ReactComponent as LogoutSvg } from '../../../../assets/svg/navbar-logout.svg';

const LogoutButton:FC = ({children}) => {
  const { logout } = useActions();

  return (
    <TransparentButton className="transparent-button--main navbar__button navbar__logout" onClick={() => logout()}>
      <LogoutSvg />
      <span>{children}</span>
    </TransparentButton>
  );
};

export default LogoutButton;