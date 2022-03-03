import React, { FC } from 'react';
import ProfileTitle from '../../UI/ProfileTitle/ProfileTitle';
import UserHeaderButtons from './UserHeaderButtons/UserHeaderButtons';
import UserHeaderClub from './UserHeaderClub/UserHeaderClub';
import './user-profile-header.scss';
import Avatar from '../../UI/Avatar/Avatar';
import useUserProfileHeader from './useUserProfileHeader';

interface UserProfileHeaderProps {
  isCurrentUser: boolean;
  userUrl: string;
  setIsLoaded: () => void;
}

const UserProfileHeader: FC<UserProfileHeaderProps> = ({ userUrl, setIsLoaded, isCurrentUser, ...rest }) => {
  const { userInfo } = useUserProfileHeader(userUrl, setIsLoaded);

  return (
    <section className="user-profile-header">
      <div className="user-profile-header__title-container">
        <div className="user-profile-header__avatar">
          <Avatar emoji={userInfo.emoji} color={userInfo.color} className="avatar--big" />
        </div>
        <ProfileTitle title={userInfo.username || ''} />
      </div>
      <UserHeaderButtons isCurrentUser={isCurrentUser} />
      <UserHeaderClub clubUrl={userInfo.clubUrl} clubname={userInfo.clubname} isCurrentUser={isCurrentUser} />
    </section>
  );
};

export default UserProfileHeader;
