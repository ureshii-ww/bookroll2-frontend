import React, { FC, useEffect, useState } from 'react';
import { UserProfileInfo } from '../../../models/user-profile-info';
import { useRequestPage } from '../../../hooks/useRequestPage';
import UserService from '../../../services/user.service';
import { useAppSelector } from '../../../hooks/useAppSelector';
import ProfileTitle from '../../UI/ProfileTitle/ProfileTitle';
import UserHeaderAvatar from '../../UI/UserHeaderAvatar/UserHeaderAvatar';
import UserHeaderButtons from '../../UI/UserHeaderButtons/UserHeaderButtons';
import UserHeaderClub from '../../UI/UserHeaderClub/UserHeaderClub';

interface UserProfileHeaderProps {
  isCurrentUser: boolean;
  userUrl: string | undefined;
}

const UserProfileHeader: FC<UserProfileHeaderProps> = ({ userUrl, isCurrentUser, ...rest }) => {
  const { isLoadingPage } = useAppSelector(state => state.event)
  const authUserData = useAppSelector(state => state.auth.userData)
  const [userInfo, setUserInfo] = useState<UserProfileInfo>({
    username: null,
    color: null,
    emoji: null,
    clubname: null,
    clubUrl: null
  });

  const [fetchInfo, error] = useRequestPage(async (userUrl: string) => {
    const response = await UserService.getUserProfileInfo(userUrl);
    setUserInfo(response.data);
  })

  useEffect(() => {
    fetchInfo(userUrl);
  }, [authUserData])

  return (
    !isLoadingPage ?
      <div>
        <div>
          <UserHeaderAvatar color={userInfo.color || ''} emoji={userInfo.emoji || ''}/>
          <ProfileTitle title={userInfo.username || ''}/>
        </div>
        <UserHeaderButtons isCurrentUser={isCurrentUser}/>
        <UserHeaderClub clubUrl={userInfo.clubUrl} clubname={userInfo.clubname} isCurrentUser={isCurrentUser}/>
      </div>
      :
      <div>
        LOADING
      </div>
  );
};

export default UserProfileHeader;