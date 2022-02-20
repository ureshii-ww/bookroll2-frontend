import React, { FC } from 'react';
import ProfileTitle from '../../UI/ProfileTitle/ProfileTitle';
import UserHeaderAvatar from './UserHeaderAvatar/UserHeaderAvatar';
import UserHeaderButtons from './UserHeaderButtons/UserHeaderButtons';
import UserHeaderClub from './UserHeaderClub/UserHeaderClub';
import './user-profile-header.scss';
import useUserProfileHeader from './useUserProfileHeader';

interface UserProfileHeaderProps {
  isCurrentUser: boolean;
  userUrl: string;
}

const UserProfileHeader: FC<UserProfileHeaderProps> = ({ userUrl, isCurrentUser, ...rest }) => {
  const {userInfo, isLoadingPage} = useUserProfileHeader(userUrl);

  return !isLoadingPage ? (
    <div className="user-profile-header">
      <div className="user-profile-header__title-container">
        <UserHeaderAvatar color={userInfo.color || ''} emoji={userInfo.emoji || ''} />
        <ProfileTitle title={userInfo.username || ''} />
      </div>
      <UserHeaderButtons isCurrentUser={isCurrentUser} />
      <UserHeaderClub clubUrl={userInfo.clubUrl} clubname={userInfo.clubname} isCurrentUser={isCurrentUser} />
    </div>
  ) : (
    <div>LOADING</div>
  );
};

export default UserProfileHeader;
