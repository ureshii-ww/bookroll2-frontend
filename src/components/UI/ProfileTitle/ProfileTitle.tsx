import React, { FC } from 'react';

interface ProfileTitleProps {
  title: string;
}

const ProfileTitle: FC<ProfileTitleProps> = ({ title, ...rest }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default ProfileTitle;