import React, { FC } from 'react';

interface UserSettingsAccountEmailProps {
  email: string;
}

const UserSettingsAccountEmail: FC<UserSettingsAccountEmailProps> = ({ email, ...rest }) => {
  return (
    <div>{email}</div>
  )
};

export default UserSettingsAccountEmail;