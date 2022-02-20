import React, { FC } from 'react';
import ProfileTitle from '../../UI/ProfileTitle/ProfileTitle';
import UserHeaderButtons from './UserHeaderButtons/UserHeaderButtons';
import UserHeaderClub from './UserHeaderClub/UserHeaderClub';
import './user-profile-header.scss';
import useUserProfileHeader from './useUserProfileHeader';
import Avatar from '../../UI/Avatar/Avatar';

interface UserProfileHeaderProps {
  isCurrentUser: boolean;
  userUrl: string;
}

const UserProfileHeader: FC<UserProfileHeaderProps> = ({ userUrl, isCurrentUser, ...rest }) => {
  const {userInfo, isLoadingPage} = useUserProfileHeader(userUrl);

  return !isLoadingPage ? (
    <div className="user-profile-header">
      <div className="user-profile-header__title-container">
        <div className="user-header-avatar">
          <Avatar emoji={userInfo.emoji} color={userInfo.color} className="avatar--big"/>
        </div>
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
