import React from 'react';
import TransparentButton from '../../UI/TransparentButton/TransparentButton';
import { useActions } from '../../../hooks/useActions';

const LogoutButton = () => {
  const {logout} = useActions();

  return (
    <TransparentButton onClick={() => logout()}>Logout</TransparentButton>
  );
};

export default LogoutButton;