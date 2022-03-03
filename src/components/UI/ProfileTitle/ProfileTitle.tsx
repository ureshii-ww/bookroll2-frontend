import React, { FC } from 'react';
import './profile-title.scss';

interface ProfileTitleProps {
  title: string;
}

const ProfileTitle: FC<ProfileTitleProps> = ({ title, ...rest }) => {
  return (
    <div className="profile-title">
      <h1 className="profile-title__text">{title}</h1>
    </div>
  );
};

export default ProfileTitle;